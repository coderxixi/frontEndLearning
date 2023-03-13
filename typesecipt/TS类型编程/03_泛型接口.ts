interface IKun<T,E> {
      name:string,
      age:number,
      slogan:T,
      hibby:E
}

const kunkun:IKun<boolean,string> ={
  name:'xixi',
  age:18,
  slogan:true,
  hibby:'code'
}