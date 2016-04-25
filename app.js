var express = require('express')
var bodyParser = require('body-parser')
var expressLayouts = require('express-ejs-layouts')

var app = express()

app.listen(3000, function() {
  port = this.address().port
  hostname = this.address().address
  hostname = hostname === '::' ? 'localhost' : hostname
  console.log('[*] Started express_twitter on ' + hostname + ':' + port)
})

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.set('layout', 'application/layout')
app.use(expressLayouts)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
require('./config/routes')(app)
