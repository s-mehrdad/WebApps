
// --------------------------------------------------------------------------------
/// <summary>
/// helloNodejs.js
/// nodeJs
/// created by Mehrdad Soleimanimajd on 11.05.2023
/// </summary>
/// <created>ʆϒʅ, 11.05.2023</created>
/// <changed>ʆϒʅ, 18.05.2023</changed>
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


var check = net.createServer();
check.listen(port, hostname, () => {
  do {
    console.log('port ' + port.toString() + ' checked!');
    port++;
  } while (check.on('error', (e) => {
    if (e.code == 'EADDRINUSE') {
      return 'no';
    } else {
      return 'yes';
      check.close();
    }
  }) == 'no');
});

var server = http.createServer((req, res) => {

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
  fs.readFile(filePath, (err, data) => {
    // res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': contentT });
    // res.write('<p>current date: ' + dt.dt() + '</p>');
    // res.write('<p>Hello, world of Node.js!</p>');
    // res.write('<p>url: ' + req.url + '</p>');
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

// server.once('error', (err) => {
//   if (err.code == "EADDRINUSE") {
//     readline.question('Port is busy! do you want to try' + (port + 1).toString() + ' port? (yes/no)\t> ', (q) => {
//       if (q == 'yes') {
//         server.close();
//         port++;
//         server.listen(port, hostname, () => {
//           console.log('Server running at http://' + hostname.toString() + ':' + port.toString() + '/');
//         });
//       }
//     });
//   }
// });

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname.toString() + ':' + port.toString() + '/');
  // let name = '';
  // readline.question('hi?\t> ', name => {
  //   console.log('hey ' + name);
  // });
});
