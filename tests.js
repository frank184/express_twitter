// Test 1
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

var req = http.req(opts, function(res) {
  res.setEncoding('utf8');

  var data = new String();
  res.on('data', function(chunks) {
    data += chunks
  }).on('end', function() {
    assert.strictEqual(
      data,
      '{"status":"ok","message":"Tweet received!"}',
      'res was not as expected'
    );
    console.log(" -> Test has passed! <- ")
  });
});

req.write('tweet=test');
req.end();
