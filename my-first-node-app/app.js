const http = require('http');

// 创建服务器
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the homepage!');
      } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the about page.');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      }
});

// 监听端口
const PORT = 8888;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});