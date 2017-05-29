const http = require('http');
const url = require('url');
const port = 1203;


const homePageHandler = require('./handlers/home-page');
const faviconHandler = require('./handlers/favicon');
const staticFilesHandler = require('./handlers/static-files');

http
    .createServer((req, res) => {
        req.path = url.parse(req.url).pathname;

        let handlers = [
            homePageHandler,
            faviconHandler,
            staticFilesHandler
        ];


        for(let handler of handlers){
            let next = handler(req, res);
            if(!next){
                break;
            }
        }

    
    })
        .listen(port);

console.log(`Server started at ${port} port`);