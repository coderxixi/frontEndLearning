interface Iperson {
  readonly name:string,
  age?:number,
  readonly height ?:number,
  address:string
}




type NewPerson<T> = {
  +readonly [K in keyof T] +?:T[K] 
}




type IKun = NewPerson<Iperson>

export {

}