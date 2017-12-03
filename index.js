var static = require('node-static');
var file = new static.Server();

require('http').createServer(function (req, res) {
  console.log(req.headers.host);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(process.env.PORT || 3000);
