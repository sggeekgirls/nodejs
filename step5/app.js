var express = require('express');
var app = express();

var routes = require('./routes/index');

app.use('/api', routes);
app.use(express.static('public'));

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
