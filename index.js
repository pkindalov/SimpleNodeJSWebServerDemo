const http = require('http');
const url = require('url');
const fs = require('fs');
const favicon = '/favicon.ico';
const port = 1202;

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
        } else if(path === favicon){

            fs.readFile('.' + favicon, (err, data) => {

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