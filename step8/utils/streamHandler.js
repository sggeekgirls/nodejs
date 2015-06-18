module.exports = function(stream, io) {

  // When tweets get sent our way ...
  stream.on('data', function(data) {
    console.log('new tweet');
    // Construct a new tweet object
    var tweet = {
      twid: data['id'],
      active: false,
      author: data['user']['name'],
      avatar: data['user']['profile_image_url'],
      body: data['text'],
      date: data['created_at'],
      screenname: data['user']['screen_name']
    };

    io.emit('tweet', tweet);
  });

};
