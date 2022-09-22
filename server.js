// const hello=require('./hello');
// hello.sayHello();

// const comp=require('./lib');
// comp.halfOf(10);

// const http=require('http');
// http.createServer((req,res) =>{
//     res.writeHead(200,{
//         'Content-Type':'text/plain'
//     });
//     res.end('Hello World');

// }).listen(3000);

// console.log('Server running at http://localhost:3000/');

const connect = require('connect');
// const e = require('express');
const app = connect();

function logger(req,res,next)
{
    console.log(req.method,req.url);
    next();
}

function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
};

function goodBye(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Good Bye!');
};

app.use(logger)
app.use('/hello',helloWorld);
app.use('/goodbye',goodBye);
app.listen(3000);
console.log('Server running at http://localhost:3000/');