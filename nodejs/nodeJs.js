// ===========================================================================
/// <summary>
/// helloNodejs.js
/// nodeJs
/// created by Mehrdad Soleimanimajd on 11.05.2023
/// </summary>
/// <created>ʆϒʅ, 11.05.2023</created>
/// <changed>ʆϒʅ, 19.10.2023</changed>
// ===========================================================================

var http = require("node:http");
var net = require("net");
const url = require("url");
const assertion = require("assert");
var fs = require("fs");
var path = require("node:path");
const dt = require("./dt");

const hostname = "localhost";
var port = 3000;

const process = require("node:process");
const input = process.stdin;
const output = process.stdout;

// const readline = require("readline").createInterface({ input, output });

// process input ------------------------------------------------------
const processInput = require("node:readline").createInterface({
    input: input,
    output: output,
    // input,
    // output,
    prompt: "hello: ",
});
processInput.prompt();
processInput.on("line", (inputtedLine) => {
    console.log(inputtedLine);
    processInput.prompt();
});
input.on("keypress", (pressedKey) => {
    console.log(pressedKey);
});
processInput.on("close", () => {
    console.log("have a good time!");
    process.exit(0);
});
processInput.once("line", () => {
    processInput.prompt();
});

// sql -----------------------------------------------------------------
const mysql = require("@mysql/xdevapi");

const connectionConfig = {
    host: "localhost",
    port: "33060",
    user: "root",
    password: "n123N-password",
    // schema: "nodeJsSchema",
};
const schemaConfig = {
    schema: "nodeJsSchema",
    collection: "nodeJsCollection",
    user: "root",
};

// sql, schema and collection --------------------------------------------
var db = mysql
    // .getSession("mysql://root:n123N-password@localhost:33060")
    .getSession(connectionConfig)
    .then((session) => {
        console.log(session.inspect());
        const njSchema = session.getSchema(schemaConfig.schema);
        njSchema
            .existsInDatabase()

            .then((exists) => {
                // exists ? { return njSchema; } : session.createSchema('nodeJsSchema');
                if (exists == true) {
                    return njSchema;
                }

                return session.createSchema(schemaConfig.schema);
            })

            .then((schema) => {
                return schema.createCollection(schemaConfig.collection, {
                    reuseExisting: true,
                });
            })

            .then((collection) => {
                return (
                    collection
                        .add([
                            { name: "cards", numberOf: 3 },
                            { name: "asides", numberOf: 3 },
                        ])
                        .execute()

                        .then(() => {
                            return collection
                                .find()
                                .fields("name", "numberOf")
                                .execute();
                        })

                        .then((response) => {
                            console.log(response.toArray());
                        })
                        // .then(() => {
                        //     njSchema.dropCollection(schemaConfig.collection);
                        // })
                        // .then(() => {
                        //     session.dropSchema(schemaConfig.schema);
                        // })
                        .then(() => {
                            session.close();
                        })
                );
            });
    });

// sql, database and table --------------------------------------------    
const databaseConfig = {
    database: "nodeJsDatabase",
    table: "nodeJsTable",
    user: "root",
};

var njDatabase = mysql.getSession(connectionConfig).then((session) => {
    console.log(session.inspect());

    session
        .sql("CREATE DATABASE IF NOT EXISTS " + databaseConfig.database)
        .execute()
        .catch((err) => {
            console.log(err);
        })

        .then(() => {
            return session
            .sql(
                "CREATE TABLE IF NOT EXISTS " +
                        databaseConfig.database +
                        "." +
                        databaseConfig.table +
                        " (_id SERIAL, name VARCHAR(30), numberOf INT)"
                )
                .execute()
                .catch((err) => {
                    console.log(err);
                });
        });

    const databaseTable = session
        .getSchema(databaseConfig.database)
        .getTable(databaseConfig.table);

    databaseTable.insert(["name", "numberOf"]).values(["cards", 3]).execute();
    databaseTable.insert(["name", "numberOf"]).values(["asides", 3]).execute();
    
    databaseTable
        .select()
        .execute()
        .then((response) => {
            console.log(response.toArray());
        });
    // return
});


// [ ] web server
// var check = net.createServer();
// check.listen(port, hostname, () => {
//   do {
//     console.log('port ' + port.toString() + ' checked!');
//   } while (check.on('error', (e) => {
//     if (e.code == 'EADDRINUSE'||e) {
//       return 'no';
//       port++;
//     } else {
//       check.close();
//       console.log("yes");
//       return 'yes';
//     }
//   }) == 'no');
// });

// [x] web server -------------------------------------------
var server = http.createServer(async (req, res) => {
    let filePath = "index.html";
    filePath = "." + req.url;
    if (filePath == "./") {
        filePath = "index.html";
    }

    let contentT = "text/html";
    switch (path.extname(req.url)) {
        case ".html":
            contentT = "text/html";
            break;
        case ".css":
            contentT = "text/css";
            break;
        case ".js":
            contentT = "text/javascript";
            break;
            default:
                break;
    }
    console.log(filePath);
    console.log(path.extname(filePath));
    let pathN = "";
    // res.statusCode = 200;
    res.writeHead(200, { "Content-Type": contentT });
    // res.write('<p>current date: ' + dt.dt() + '</p>');
    // res.write('<p>Hello, world of Node.js!</p>');
    // res.write('<p>url: ' + req.url + '</p>');
    fs.readFile(filePath, (err, data) => {
        res.write(data);
        // app.use(express.static('public'));
        // app.use()
        console.log(err);
        return res.end();
    });
    let a = url.parse(req.url, true);
    pathN = a.pathname;
    console.log(
        "Requested url:" +
            hostname +
            ":" +
            port.toString() +
            pathN.toString() +
            "/"
    );
    console.log("url: " + req.url + "/");
});
server.on("error", (e) => {
    if (e.code == "EADDRINUSE" || e) {
        // [x] port plus it the next application instance :|
        port++;
        console.log("port is now " + port.toString());
        server.listen(port, hostname, () => {
            console.log(
                "Server running at http://" +
                    hostname.toString() +
                    ":" +
                    port.toString() +
                    "/"
            );
        });
    } else {
        console.log(e.code);
    }
});
server.listen(port, hostname, () => {
    do {
        console.log("port " + port.toString() + " checked!");
    } while (
        server.on("error", (e) => {
            if (e.code == "EADDRINUSE" || e) {
                processInput.question(
                    "Port is busy! do you want to try " +
                        (port + 1).toString() +
                        " port? (yes/no)\t> ",
                    (q) => {
                        if (q == "yes") {
                            port++;
                        }
                    }
                );
                return "no";
            } else {
                return "yes";
            }
        }) == "no"
    );
    console.log(
        "Server running at http://" +
            hostname.toString() +
            ":" +
            port.toString() +
            "/"
    );
});

// [ ] mongodb ------------------------------------------
// var MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
// var uri = "mongodb://localhost:27017/mydb?directConnection=true&serverSelectionTimeoutMS=2000";
// var uri = process.env.MONGO_URI;
// var client = new MongoClient(uri);

// [ ] mysql connector module ---------------------------
// const mysql = require('mysql');
// const mysql = require("mysql2");
// var db = mysql.createConnection({
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "n123N-password",
//   database: "mydb",
// });

// server.once("error", (err) => {
//   if (err.code == "EADDRINUSE") {
//     processInput.question(
//       "Port is busy! do you want to try " +
//         (port + 1).toString() +
//         " port? (yes/no)\t> ",
//       (q) => {
//         if (q == "yes") {
    //           server.close();
//           port++;
//           server.listen(port, hostname, () => {
//             console.log(
    //               "Server running at http://" +
//                 hostname.toString() +
//                 ":" +
//                 port.toString() +
//                 "/"
//             );
//           });
//         }
//       }
//     );
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(
//     "Server running at http://" +
//     hostname.toString() +
//     ":" +
//     port.toString() +
//     "/"
//   );
// });

// mongoose.connect(uri).then((err, db) => {
//     console.log('Server running at http://' + hostname.toString() + ':' + port.toString() + '/');
//     if (err) {
//       console.log(err.code);
//       throw err;
//     } else {
//       console.log("Database created!");
//       console.log(db);
//     }
//   }
// );

// client.connect(uri
//   , async function (err, db) {
//     if (err) {
//       console.log(err.code);
//       throw err;
//     } else {
//       console.log(db);
//       var dbo = db.db("mydb");
//       dbo.createCollection("customers", (err, res) => {
//         if (err) {
//           console.log(err.code);
//         } else {
//           console.log("Collection created!");
//           console.log(res);
//         }
//       });
//       console.log("Database created!");
//       db.close();
//     }
//   })
//   .then(server.listen(port, hostname, () => {
//     console.log('Server running at http://' + hostname.toString() + ':' + port.toString() + '/');
//     // let name = '';
//     // processInput.question('hi?\t> ', name => {
//     //   console.log('hey ' + name);
//     // });
//   }));

// db.connect((err, dbo) => {
//   if (err == "ECONNREFUSED") {
//     // console.log(err.code);
//     // throw err;
//     console.log("MySql server can't be connected!");
//     console.log(err);
//   } else {
//     console.log("MySql server is connected!");
//     console.log(dbo);

//     // let name = '';
//     // processInput.question('hi?\t> ', name => {
//       //   console.log('hey ' + name);
//       // });
//       db.query("CREATE DATABASE mydb", (err, result )=> {
//         console.log("hi"); // execute the bullshit :\
//         if (err) {
//           if (err.code == "ER_DB_CREATE_EXISTS") {
//             // console.log(err.code);
//             // console.log(err);
//             console.log("Database already exists!");
//           } else {
//             // console.log(err.code);
//             console.log(err);
//             console.log(result);
//             console.log("Database created!");
//           }
//         }
//       });
//       server.listen(port, hostname, () => {
//         console.log(
//           "Server running at http://" +
//             hostname.toString() +
//             ":" +
//             port.toString() +
//             "/"
//         );
//       var sql =
//         "CREATE TABLE cards (id INT, name VARCHAR(100), description VARCHAR(255)), packedCounter INT";
//       db.query(sql, err, (result) => {
//         if (err) {
//           if (err.code == "ER_TABLE_EXISTS_ERROR") {
//             // console.log(err.code);
//             console.log(err);
//             console.log("creation of cards table failed!");
//           } else {
//             // console.log(err.code);
//             console.log(err);
//             console.log(result);
//             console.log("table 'cards' created!");
//           }
//         }
//       });
//       db.query(
//         "CREATE TABLE asides (id INT, name VARCHAR(100), description VARCHAR(255)), packedCounter INT",
//         err,
//         (result) => {
//           if (err) {
//             if (err.code == "ER_TABLE_EXISTS_ERROR") {
//               // console.log(err.code);
//               console.log(err);
//               console.log("creation of aside table failed!");
//             } else {
//               // console.log(err.code);
//               console.log(err);
//               console.log(result);
//               console.log("table 'aside' created!");
//             }
//           }
//         }
//       );
//       db.query(
//         "CREATE TABLE states (id INT, from VARCHAR(100), packedDate VARCHAR(255))",
//         err,
//         (result) => {
//           if (err) {
//             if (err.code == "ER_TABLE_EXISTS_ERROR") {
//               // console.log(err.code);
//               console.log(err);
//               console.log("creation of states table failed!");
//             } else {
//               // console.log(err.code);
//               console.log(err);
//               console.log(result);
//               console.log("table 'states' created!");
//             }
//           }
//         }
//       );
//       // db.close();
//     });
//   }
// });
