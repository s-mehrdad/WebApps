
// --------------------------------------------------------------------------------
/// <summary>
/// helloNodejs.js
/// nodeJs
/// created by Mehrdad Soleimanimajd on 11.05.2023
/// </summary>
/// <created>ʆϒʅ, 11.05.2023</created>
/// <changed>ʆϒʅ, 31.05.2023</changed>
// --------------------------------------------------------------------------------


var http = require('node:http');
var net = require('net');
const url = require('url');
const assertion = require('assert');
var fs = require('fs');
var path = require('node:path');
const dt = require('./dt');
const hostname = '127.0.0.1';
var port = 3000;
const process = require('node:process');
const input = process.stdin;
const output = process.stdout;
const readline = require('readline').createInterface({ input, output });

// var MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
// var uri = "mongodb://localhost:27017/mydb?directConnection=true&serverSelectionTimeoutMS=2000";
// var uri = process.env.MONGO_URI;
// var client = new MongoClient(uri);

// const mysql = require('mysql');
const mysql = require('mysql2');
var db = mysql.createConnection(
  {
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "n123N-password",
    database: "mydb"
  }
);


// var check = net.createServer();
// check.listen(port, hostname, () => {
//   do {
//     console.log('port ' + port.toString() + ' checked!');
//     port++;
//   } while (check.on('error', (e) => {
//     if (e.code == 'EADDRINUSE'||e) {
//       return 'no';
//     } else {
////       check.close();
//       return 'yes';
//     }
//   }) == 'no');
// });

var server = http.createServer(async (req, res) => {

  let filePath = 'index.html';
  filePath = '.' + req.url;
  if (filePath == './') {
    filePath = 'index.html';
  }

  let contentT = 'text/html';
  switch (path.extname(req.url)) {
    case '.html':
      contentT = 'text/html';
      break;
    case '.css':
      contentT = 'text/css';
      break;
    case '.js':
      contentT = 'text/javascript';
      break;
    default:
      break;
  }
  console.log(filePath);
  console.log(path.extname(filePath));
  let pathN = '';
  // res.statusCode = 200;
  res.writeHead(200, { 'Content-Type': contentT });
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
  console.log('Requested url:' + hostname + ':' + port.toString() + pathN.toString() + '/');
  console.log('url: ' + req.url + '/');
});


server.once('error', (err) => {
  if (err.code == "EADDRINUSE") {
    readline.question('Port is busy! do you want to try ' + (port + 1).toString() + ' port? (yes/no)\t> ', (q) => {
      if (q == 'yes') {
        server.close();
        port++;
        server.listen(port, hostname, () => {
          console.log('Server running at http://' + hostname.toString() + ':' + port.toString() + '/');
        });
      }
    });
  }
});


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
//     // readline.question('hi?\t> ', name => {
//     //   console.log('hey ' + name);
//     // });
//   }));


db.connect((err, dbo) => {
  if (err == "ECONNREFUSED") {
    // console.log(err.code);
    // throw err;
    console.log("MySql server can't be connected!");
    console.log(err);
  } else {
    console.log("MySql server is connected!");
    console.log(dbo);
    server.listen(port, hostname, () => {
      console.log('Server running at http://' + hostname.toString() + ':' + port.toString() + '/');
      // let name = '';
      // readline.question('hi?\t> ', name => {
      //   console.log('hey ' + name);
      // });
      db.query("CREATE DATABASE mydb", function (err, result) {
        if (err) {
          if (err.code == "ER_DB_CREATE_EXISTS") {
            // console.log(err.code);
            // console.log(err);
            console.log("Database already exists!");
          } else {
            // console.log(err.code);
            console.log(err);
            console.log(result);
            console.log("Database created!");
          }
        }
      })
      var sql = "CREATE TABLE cards (id INT, name VARCHAR(100), description VARCHAR(255)), packedCounter INT";
      db.query(sql, err, result => {
        if (err) {
          if (err.code == "ER_TABLE_EXISTS_ERROR") {
            // console.log(err.code);
            console.log(err);
            console.log("creation of cards table failed!");
          } else {
            // console.log(err.code);
            console.log(err);
            console.log(result);
            console.log("table 'cards' created!");
          }
        }
      });
      db.query("CREATE TABLE asides (id INT, name VARCHAR(100), description VARCHAR(255)), packedCounter INT", err, result => {
        if (err) {
          if (err.code == "ER_TABLE_EXISTS_ERROR") {
            // console.log(err.code);
            console.log(err);
            console.log("creation of aside table failed!");
          } else {
            // console.log(err.code);
            console.log(err);
            console.log(result);
            console.log("table 'aside' created!");
          }
        }
      });
      db.query("CREATE TABLE states (id INT, from VARCHAR(100), packedDate VARCHAR(255))", err, result => {
        if (err) {
          if (err.code == "ER_TABLE_EXISTS_ERROR") {
            // console.log(err.code);
            console.log(err);
            console.log("creation of states table failed!");
          } else {
            // console.log(err.code);
            console.log(err);
            console.log(result);
            console.log("table 'states' created!");
          }
        }
      });
      // db.close();
    })
  }
});
