'use strict';

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer();
const port = process.env.PORT || 80;

function onRequest (req, res) {
    const index = path.join(__dirname, 'out', 'index.html');
    let rs = fs.createReadStream(index);

    rs.setHeader('Content-Type', 'text/html');
    rs.pipe(res);

    rs.on('error', err => {
        res.setHeader('Content-Type', 'text/plain')
        res.end(err.message)
    });
}

function onListening () {
    console.log(`Server running in port ${port}`)
}

server.on('request', onRequest);
server.on('listening', onListening);

server.listen(port);
