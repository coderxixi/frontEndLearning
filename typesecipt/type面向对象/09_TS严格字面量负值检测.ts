interface IPerson {
  name:string,
  age:number
}

// 定义info 类型是IPerson 类型
//奇诡的现象一
const obi={
  name: 'why',
  age: 18,
  //多一个height类型
  height: 188
}
const info: IPerson = obi 


//奇怪的现象二

 function prinPerson(person:IPerson){

 }
 const kobe={name:'xixi',age:18}
prinPerson(kobe)