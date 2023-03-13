//映射类型不能使用interface定义


//
type MapPerson<T> ={
  // [key:string]:string
  [P in keyof T]?: T[P]
}


interface IPErson {
  name:string,
  age:number
}

//拷贝一份 IPerson 
type NewPerson= MapPerson<IPErson>

