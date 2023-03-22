// 核心配置参数
const selectors = [
  {
    selector: "#btn1",
    message: "点此【新增】数据！",
  },
  {
    selector: "#btn2",
    message: "小心【删除】数据！",
  },
  {
    selector: "#btn3",
    message: "可通过此按钮【修改】数据！",
  },
  {
    selector: "#btn4",
    message: "一键【完成】所有操作！",
  },
];
let index=0; //当前索引
let cloneNode = null;
let currNode = null;//克隆节点
const pBtn = document.getElementsByClassName('pBtn')[0];
const bBtn = document.getElementsByClassName('bBtn')[0];
const guideModalRef = document.getElementById('guideModalRef');
const guideBoxRef = document.getElementById('guideBoxRef');
const message = document.getElementsByClassName('message')[0]
//获取消息
function getMessage(index){
  return selectors[index].message
}

function genGuide(hasChange = true){
  cloneNode && guideModalRef.removeChild(cloneNode);

  // 所有指引完毕
  if (index > selectors.length - 1) {
    // show= false;
    return;
  }
  console.log('guideBoxRef', guideBoxRef.clientHeight, cloneNode);
  // 获取目标节点信息
  currNode =currNode || document.querySelector(selectors[index].selector);
  const { x, y, width, height } = currNode.getBoundingClientRect();
  console.log('currNode', currNode.getBoundingClientRect());
  // 克隆节点
  cloneNode = hasChange ? currNode.cloneNode(true) : cloneNode;
  cloneNode.id = currNode.id + "_clone";
  cloneNode.style = `
  margin-left: ${x}px;
  margin-top: ${y}px;
  `;
  console.log('guideBoxRef', guideBoxRef.clientHeight, cloneNode);
  // 指引相关
  if (guideBoxRef) {
    const halfClientHeight = guideBoxRef.clientHeight / 2;
    guideBoxRef.style = `
   left:${x + width + 10}px;
   top:${y <= halfClientHeight ? y : y - halfClientHeight + height / 2}px;
  `;
    message.innerHTML=getMessage(index)
    guideModalRef.appendChild(cloneNode);
  }
}

//上一步
pBtn.onclick=function(){
  index--
  currNode = null;
  genGuide();
}

//下一步

bBtn.onclick=function(){
 
   index++;
  currNode = null;
  genGuide();
}
window.onload=function(){
  console.log('dasfas');
  genGuide()
}
// 页面内容发生变化时，重新计算位置
window.addEventListener("resize", () => genGuide(false));
window.addEventListener("scroll", () => genGuide(false));

