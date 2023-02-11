const http=require('http');
//创建一个http 服务器
const sever= http.createServer((req,res)=>{
 // request对象中包含本次客户端请求的所有信息
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  res.end('dsaaf','utf-8')
 });
// 开启对应的服务器 并且告知需要监听的端口
 sever.listen(8000,()=>{
console.log('服务器创建成功');
  })