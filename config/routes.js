var tweets = require('../controllers/tweets')

module.exports = function(app) {

  // Root
  app.get(['/', '/index'], function(req, res) {
    res.redirect(302, '/tweets')
  })

  // Tweets
  app.get(['/tweets', '/tweets/index'], tweets.index)
  app.post('/tweets/create', tweets.create)
  app.get('/tweets/:id', tweets.show)
}
