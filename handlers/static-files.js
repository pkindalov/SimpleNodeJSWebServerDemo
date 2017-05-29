const fs = require('fs');

let getContentType = (url) => {
    
     let contentType = 'text/plain';
         if(url.endsWith('.css')){
             contentType = 'text/css';
        }else if(url.endsWith('.js')){
            contentType = 'application/javascript';
        }

        return contentType;
};


module.exports = (req, res) => {
     fs.readFile('.' + req.path, (err, data) => {
                if(err){
                    res.writeHead(404, {
                        'Content-type':'text/plain'
                    });

                    res.write('Resource not found');
                    res.end();
                }


                res.writeHead(200, {
                    'Content-type': getContentType(req.path)
                });
                res.write(data);
                res.end();

            });
};