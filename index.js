const http = require('http');
const url = require('url');
const port = 1200;

http
    .createServer((req, res) => {
        let path = url.parse(req.url).pathname;

        res.writeHead(200, {
            'Content-type': 'text/html'
        });
           res.write('<h1>Hello from Node !</h1>');
           res.end();
    })
        .listen(port);

console.log(`Server started at ${port} port`);