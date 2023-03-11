class Person{
  private _name:string

  constructor(name:string){
    this._name=name
  }

  set name(newValue:string){
     this._name=newValue
  }

  get name():string{
    return this._name
  }
}
const p=new Person('why');
p.name='xixi'
export{

}