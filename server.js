const http = require('http');
//TODO create certificates for https
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port,()=>{
    console.log("Server up on port "+port);
});