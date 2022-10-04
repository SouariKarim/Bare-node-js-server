// this error does not handle errors only serves the files .

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // serving a file from the backend
  // console.log('this is the request');
  const person = {
    name: 'karim',
  };

  console.log(JSON.stringify(person, null, 2));
  if (req.url === '/') {
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) throw err;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  }

  // serving an api as a json file

  if (req.url === '/api/users') {
    // getting the data from a db
    const users = [
      { name: 'karim', age: 32 },
      { name: 'sabrine', age: 32 },
    ];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  }
});

const PORT = 5000;
server.listen(PORT, () => console.log('server is listening on port 5000'));

// this is to make a request to one of the routes of the server automatically when we run the scripts
http.get('http://localhost:5000');
