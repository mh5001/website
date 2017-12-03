var static = require('node-static');
var file = new static.Server();

require('http').createServer(function(request, response) {
  response.writeHead(request.url)
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);
