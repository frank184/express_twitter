var express = require('express');
var bodyParser = require('body-parser')

var tweets = []

var app = express();

app.listen(3000, function() {
  port = this.address().port;
  hostname = this.address().address;
  hostname = hostname === '::' ? 'localhost' : hostname;
  console.log('[*] Started express_twitter on ' + hostname + ':' + port);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var title = 'Chirpie',
      header = 'Welcome to Chirpie'

  response.render('index', {
      'title': title,
      'header': header,
      'tweets': tweets,
      stylesheets: ['/public/style.css']
  });
});

parser = bodyParser.urlencoded({
  extended: true
});

app.post('/send', parser, function(request, response) {
  if (request.body && request.body.tweet) {
    tweets.push(request.body.tweet);

    if(acceptsHtml(request.headers['accept']))
      response.redirect(302, '/');
    else
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

function acceptsHtml(header) {
  var accepts = header.split(',');
  for (var i = 0; i < accepts.length; i += 1)
    if (accepts[0] === 'text/html')
      return true;
  return false;
}
