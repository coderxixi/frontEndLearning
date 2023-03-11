class Person {
  readonly name:string
  age:number

  constructor(name:string,age:number){
    this.name=name;
    this.age=age

  }
}



const p=new Person('why',18);
p.age=20

export{

}