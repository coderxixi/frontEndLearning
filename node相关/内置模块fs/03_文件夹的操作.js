const fs=require('fs');
//创建文件夹



fs.mkdir('./why',(err)=>{
  console.log('err',err);
})

//获取文件中的内容

fs.readdir('./why',(err,data)=>{
   console.log('data',data)
})


// 读取文件夹，获取文件夹中的文件的信息

fs.readdir('./why',{withFileTypes:true},(err,data)=>{
  console.log('data',data)
})