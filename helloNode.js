// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// console.log("Hello World");
// let http = require
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = 'Some data';
//         callback(data);
//     }, 1000);
// }

// fetchData((data) => {
//     console.log(data);
// });
// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }

// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
const http = require('http');

// 创建服务器并定义路由
const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  } else if (url === '/about' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});