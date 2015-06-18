var http = require('http');
var port = 3000;

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World\n');
  res.end();

}).listen(port);

