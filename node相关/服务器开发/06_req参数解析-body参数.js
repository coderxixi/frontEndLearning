const http = require('http');
const url = require('url');
const qs = require('querystring')
//创建一个http 服务器
const sever = http.createServer((req, res) => {
  //获取参数 body 参数
  // req对象本质上是一个readable可读流
  req.setEncoding('utf-8')
  req.on('data', (data) => {
    const dataString=data;
    const loginInfo=JSON.parse(dataString);
    
    console.log('data', data);
  })
  
  req.on('end', (data) => {
    console.log('登录回来');
  })

  

});
// 开启对应的服务器 并且告知需要监听的端口
sever.listen(8000, () => {
  console.log('服务器创建成功');
})