var accepts = require('accepts')

var tweets = []
exports.index = function(req, res) {
  var title = 'Twitter',
      header = 'Welcome to Twitter'

  res.render('tweets/index', {
      'title': title,
      'header': header,
      'tweets': tweets,
      stylesheets: ['/public/style.css']
  })
}

exports.create = function(req, res) {
  var accept = accepts(req)
  if (req.body && req.body.tweet) {
    tweets.push(req.body.tweet)
    switch (accept.type(['html', 'json'])) {
      case 'html':
        res.redirect(302, '/')
        break;
      case 'json':
        res.send({
          status: "ok",
          message: "Tweet received!"
        })
        break;
    }
  } else {
    res.send({
      status: "nok",
      message: "No Tweet received!"
    })
  }
}

exports.show = function(req, res) {

}
