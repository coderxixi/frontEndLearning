const http=require('http');
const url=require('url');
const qs=require('querystring')
//创建一个http 服务器
const sever= http.createServer((req,res)=>{
 // 解析URL
  const urlInfo=url.parse(req.url)
  //解析query name=xiix&size=10;
  const queryString= qs.parse(urlInfo.query) ;
  res.end('对象用于给客户端返回结果','utf-8')
 });
// 开启对应的服务器 并且告知需要监听的端口
 sever.listen(8000,()=>{
console.log('服务器创建成功');
  })