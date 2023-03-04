interface Foo {
  name:string,
  age:number,
  height:number,
}


type Fookes=keyof Foo; //name age height keyof 的产物必定是一个联合类型。

let foo:Fookes="age"

export {

}