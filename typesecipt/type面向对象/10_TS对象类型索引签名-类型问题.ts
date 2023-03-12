interface IIndxTYpe {
  [index:number]:string
}



const names:IIndxTYpe=['abc','cba','nba'];
names['0']='123'
console.log(names['0']);


export{}