interface ICollection {
  //索引签名
  [key: string]: number
  length: number
}

const names: Array<string> = ['abc', 'bc'];

console.log(names[0]);

function iteratorCollection(collection: ICollection) {


}

const tuple: [string, string] = ['why', '18'];


const info = {
  name: 'why',
  age: 18,
  length: 10
}
iteratorCollection({
  name: 111,
  age: 18,
  length:10
})
// iteratorCollection(tuple)
export { }