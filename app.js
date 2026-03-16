const http = require('http');

const server = http.createServer((req,res)=>{
res.write("Jenkins Docker CI/CD Pipeline Success");
res.end();
});

server.listen(3000);
