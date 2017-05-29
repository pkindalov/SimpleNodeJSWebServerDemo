const fs = require('fs');
const faviconPath = '/favicon.ico';


module.exports = (req, res) => {
    if(req.path === faviconPath){
        fs.readFile('..' + favicon, (err, data) => {

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
    }
};