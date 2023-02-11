const http=require('http');

//创建一个http 服务器

  const sever= http.createServer((request,respones)=>{
    // request对象中包含本次客户端请求的所有信息
    //请求的url 
    // 请求的method
    // 请求的headers
    // 请求携带的数据

    // respones 对象用于给客户端返回结果
    respones.end('对象用于给客户端返回结果','utf-8')
  });
// 开启对应的服务器 并且告知需要监听的端口
  sever.listen(8000,()=>{
    console.log('服务器创建成功');
  })