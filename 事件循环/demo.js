function delay(duration){
  var start=Date.now();
  while(Date.now()-start<duration){}
}

setTimeout(()=>{
    console.log('1');
},0)

console.log('2');

delay(1000)

Promise.resolve().then(()=>{
  console.log('2');
})
console.log('3');