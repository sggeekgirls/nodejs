var _socket = null;
  $(function() {
    // Here you create the connection with the server
    _socket = io();
    _socket.on("tweet", function(tweet) {
      $("<li></li>").text("@" + tweet.screenname + " " + tweet.body).prependTo("ul#tweets-container");
    });
  });

