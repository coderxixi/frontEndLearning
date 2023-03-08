const http=require('http');
const html=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>werwer</h1>
  <button>cahnggesdfasf    </button>
 


</body>
</html>
`
const server=http.createServer((req,res)=>{
  res.end(html)
})

server.listen(3000,()=>{
  console.log('listening 3000');
})