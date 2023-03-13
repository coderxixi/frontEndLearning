// 元祖 useState


function useState<T>(initiaState:T):[T,(newStae:T)=>void]{
  let state=initiaState;
  function setState(newState){
    state = newState
  }
  return [state, setState]
}

//初始化

const [count, setCount] = useState<number>(100);
const [count1, setCount1] = useState<string>('coderxixi');
const [arr,setArr]=useState<any[]>([]);

export { }