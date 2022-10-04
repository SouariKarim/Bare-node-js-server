// this server handles errors

const http = require('http');
const fs = require('fs');
const path = require('path');

// creatung the server of
const server = http.createServer((req, res) => {
  // the reqest obkject is accessible anywhere in the application

  // the url and the file path wich are the same only the index.html wich is the home route
  // set the file path from the url passed in the request
  // add public to the url of the file
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // getting the extension of the file wich will be serverd
  let extname = path.extname(filePath);

  // the initial content type accessible

  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType: 'text/javascript';
      break;
    case '.css':
      contentType: 'text/css';
      break;
    case '.json':
      contentType: 'application/json';
      break;
    case '.png':
      contentType: 'image/png';
      break;
    case '.jpg':
      contentType: 'image/jpg';
      break;
  }

  console.log(filePath);
  // the file path is the conbination between the req url and the location fo the files in the server
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // if the req url is not valid

      // if there is an error
      if (err.code === 'ENOENT') {
        // if the file does not exist
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(404, {
              'Content-Type': 'text/html ; charset = utf-8',
            });
            res.end(content);
          }
        );
      } else {
        // if there is server error
        res.writeHead(500);
        res.end(`server error : ${err.code}`);
      }
    } else {
      // if there is no error
      res.writeHead(200);
      res.end(content); //
    }
  });
});

const PORT = 5000;
server.listen(PORT, () => console.log('server is runnig on port 5000 ! '));
