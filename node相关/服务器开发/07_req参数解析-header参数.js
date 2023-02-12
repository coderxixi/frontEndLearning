const http = require('http');
//创建一个http 服务器
const sever = http.createServer((req, res) => {
  console.log(req.headers);
  console.log(req.headers['content-type'])

  res.end('查看header的信息')
});
// 开启对应的服务器 并且告知需要监听的端口
sever.listen(8000, () => {
  console.log('服务器创建成功');
})