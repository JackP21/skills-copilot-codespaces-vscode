// Create web server
// Create a web server that listens on port 3000 and responds with a file called comments.html when a user visits the root URL.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});