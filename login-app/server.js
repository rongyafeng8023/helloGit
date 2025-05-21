// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');

// const app = express();
// const PORT = 3000;
// const JWT_SECRET = 'my_secret_key';

// app.use(cors());
// app.use(express.json());
// app.use(express.static('public'));

// // MongoDB 连接
// mongoose.connect('mongodb://localhost:27017/login-app', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });
// const User = mongoose.model('User', userSchema);

// // 注册接口
// app.post('/api/register', async (req, res) => {
//   const { username, password } = req.body;
//   const hashed = await bcrypt.hash(password, 10);
//   const user = new User({ username, password: hashed });
//   await user.save();
//   res.json({ message: '注册成功' });
// });

// // 登录接口
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });
//   if (!user) return res.status(400).json({ message: '用户不存在' });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(401).json({ message: '密码错误' });

//   const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
//   res.json({ message: '登录成功', token });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
var http = require("http");
http.createServer(function(request,response){
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end("helloworld");


}).listen(8888)

console.log('Server running at http://127.0.0.1:8888/');