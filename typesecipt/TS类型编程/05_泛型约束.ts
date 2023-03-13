interface Llenght {
  length:number
}


function getLengs<T extends Llenght>(args: T):T{
  return args
}

getLengs<string>('hkahfkjas');
getLengs<any[]>(['sadf','sadf']);
getLengs({length:9}) 