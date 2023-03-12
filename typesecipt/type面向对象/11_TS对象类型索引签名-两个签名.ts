interface IIndexTypes {
  [index:number]:string,
  [key:string]:any
}
const names: IIndexTypes=['abc','cba','nba']
const itme1=names['string']
export {}