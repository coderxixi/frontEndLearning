const fs  = require("fs");
//  同步读取
const res1= fs.readFileSync('./abc.txt',{encoding:'utf-8'});
console.log('res1',res1)



// 异步读取 回调函数

fs.readFile('./abc.txt',{encoding:'utf-8'},(err,data)=>{
  console.log('res',data);
})




// 异步读取：Promise

fs.promises.readFile('./abc.txt',{encoding:'utf-8'}).then(res=>{
  console.log('resss',res);
}).catch(error=>{
  console.log('error',error
  );
})