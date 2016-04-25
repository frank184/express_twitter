var http = require('http');
var assert = require('assert');

var opts = {
  host: 'localhost',
  port: 3000,
  path: '/send',
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
}

var request = http.request(opts, function(response) {
  response.setEncoding('utf8');

  var data = new String();
  response.on('data', function(chunks) {
    data += chunks
  }).on('end', function() {
    assert.strictEqual(
      data,
      '{"status":"ok","message":"Tweet received!"}',
      'Response was not as expected'
    );
    console.log(" -> Test has passed! <- ")
  });
});

request.write('tweet=test');
request.end();
