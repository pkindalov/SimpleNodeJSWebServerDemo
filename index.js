const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 1201;

http
    .createServer((req, res) => {
        let path = url.parse(req.url).pathname;

        if(path === '/'){
            fs.readFile('./index.html', (err, data) => {
                if(err){
                    console.log(err);
                    return;
                }

                res.writeHead(200, {
                    'Content-type': 'text/html'
                });

                res.write(data);
                res.end();

            });
        } else if(path === '/favicon.ico'){

            fs.readFile('./nodejs-256.ico', (err, data) => {

                if(err){
                    console.log(err);
                    return;
                }

                res.writeHead(200, {
                    'Content-type': 'image/x-icon'
                });

                res.write(data);
                res.end();

            });


        }else{
            res.writeHead(404, {
                'Content-type':'text/plain'
            });

            res.write('Page not found');
            res.end();
        }
    
    })
        .listen(port);

console.log(`Server started at ${port} port`);