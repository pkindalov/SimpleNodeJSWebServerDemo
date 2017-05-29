const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 1202;

http
    .createServer((req, res) => {
        req.path = url.parse(req.url).pathname;

        if(path === '/'){
            // fs.readFile('./index.html', (err, data) => {
            //     if(err){
            //         console.log(err);
            //         return;
            //     }

            //     res.writeHead(200, {
            //         'Content-type': 'text/html'
            //     });

            //     res.write(data);
            //     res.end();

            // });
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

            fs.readFile('.' + path, (err, data) => {
                if(err){
                    res.writeHead(404, {
                        'Content-type':'text/plain'
                    });

                    res.write('Resource not found');
                    res.end();
                }


                let contentType = 'text/plain';
                if(path.endsWith('.css')){
                    contentType = 'text/css';
                }else if(path.endsWith('.js')){
                    contentType = 'application/javascript';
                }


                res.writeHead(200, {
                    'Content-type': contentType
                });
                res.write(data);
                res.end();

            });

        }
    
    })
        .listen(port);

console.log(`Server started at ${port} port`);