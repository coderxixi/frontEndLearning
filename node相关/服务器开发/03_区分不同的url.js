const http = require('http');
//创建一个http 服务器
const sever = http.createServer((req, res) => {
  const url = req.url;
  if (url == '/login') {
    res.end('登录成功')
  } else if (url == '/products') {
    res.end('商品列表')
  }

});
// 开启对应的服务器 并且告知需要监听的端口
sever.listen(8000, () => {
  console.log('服务器创建成功');
})