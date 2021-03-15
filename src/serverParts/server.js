const http = require('http');
const url = require('url');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
let finalMessage;
let WELCOME_MESSAGE;
fs.readFile('./welcomeMessage.html', (err, message) => {WELCOME_MESSAGE = message});

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true);
    const fileName = `.${query.pathname}`;
    res.setHeader('Content-Type', 'text/html');
    if(query.pathname === '/'){
        res.statusCode = 200;
        finalMessage = WELCOME_MESSAGE;
    }
    else {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                res.statusCode = 404;
                finalMessage = '404 Not Found';
            }
            res.statusCode = 200;
            finalMessage = data;
        })
    }
    res.write(finalMessage);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});