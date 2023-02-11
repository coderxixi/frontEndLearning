const fs = require("fs");
const str='hello world my name is xixi'

//  同步写入

fs.writeFile('./bbb.txt',{encoding:'utf-8'},str,(err)=>{

})



// 异步写入 回调函数

// 异步写入：Promise