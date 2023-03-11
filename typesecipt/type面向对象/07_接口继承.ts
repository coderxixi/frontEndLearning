interface IPerson {
  name:string
  age:number
}
interface IKun extends IPerson {
  slogan:string
}

const ikun:IKun={
  name:'code',
  slogan: 'xixi',


}

export {}