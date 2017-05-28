const http = require('http');
const port = 1200;

http
    .createServer((req, res) => {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
           res.write('<h1>Hello from Node !</h1>');
           res.end();
    })
        .listen(port);

console.log(`Server started at ${port} port`);