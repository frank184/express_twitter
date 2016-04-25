var express = require('express');
var bodyParser = require('body-parser')

var tweets = []

var app = express();
app.listen(3000);

app.get('/', function(request, response) {
  response.send('Welcome to Node Twitter');
});

parser = bodyParser.urlencoded({
  extended: true
});

app.post('/send', parser, function(request, response) {
  if (request.body && request.body.tweet) {
    tweets.push(request.body.tweet);
    response.send({
      status: "ok",
      message: "Tweet received!"
    });
  } else {
    response.send({
      status: "nok",
      message: "No Tweet received!"
    });
  }
});

app.get("/tweets", function(request, response) {
  response.send(tweets);
});
