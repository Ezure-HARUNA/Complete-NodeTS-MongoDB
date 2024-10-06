const http = require('http');

function rqListener(req, res) {
    // console.log('Request received.');

}

const server = http.createServer((req, res) => {
    console.log(req);
    
});

server.listen(3000  );

