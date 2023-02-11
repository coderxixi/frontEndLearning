const fs  = require("fs");
//  同步读取
const res1= fs.readFileSync('./abc.txt','utf-8');
console.log('res1',res1)



// 异步读取 回调函数




// 异步读取：Promise