interface Ikun{
  name:string,
  age:number,
  slogan:string,
  play:()=>void
}
interface IRun {
  running:()=>void
}

const ikun:Ikun={
  name:'why',
  age:18,
  slogan:'你干嘛',
  play:()=>{}
}
//作用 接口被类实现

class Person implements Ikun, IRun{
   constructor(public name:string,public age:number,public slogan:string){

   }
  play(){
    console.log('this',this.name);
    
  } 
  running(){
    console.log('runing');
    
  } 
}

export {}