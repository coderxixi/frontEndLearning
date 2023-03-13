
function getObjectProperty<O,K extends keyof O>(obj:O,key:K){
   return obj[key]
}


const info={
  name:"why",
  age:18,
  height:188
}

const name = getObjectProperty(info,"age");


export {

}