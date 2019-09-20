const http = require('http');

http.createServer((req, res) => {
  res.write('Sup, Dawg?');
  res.end();
}).listen(8080);

console.log('The Server... is running... on port 8080');