var express = require('express');
var twitter = require('twitter');
var config = require('./config/config');
var streamHandler = require('./utils/streamHandler')
var app = express();

//var routes = require('./routes/index');

//app.use('/api', routes);
app.use(express.static('public'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'Twitter Streaming Wall', tag: 'javascript' });
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

// Initialize socket.io
var io = require('socket.io').listen(server);
// Create a new ntwitter instance
var twit = new twitter(config.local);
// Set a stream listener for tweets matching tracking keywords
twit.stream('statuses/filter',{ track: 'javascript'}, function(stream){
  console.log('listening');
  streamHandler(stream, io);
});
