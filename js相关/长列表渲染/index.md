渲染大数据的时候 合理的使用createDocumentFragment和requesAnimationFrame 将操作分为一小段一小段的执行

## createDocumentFragment

1.createDocumentFragment() 方法是用来创建一个虚拟的节点对象 或者来说 是创建文档碎片的节点 它可以包含各种类型的节点 在创建之初是空的

2. DocumentFragment节点不属于文档树 继承parenNode属性总是null 它有一个很实用的特点 当请求把一个
DocumentFragment节点插入文档树时 插入的不是DocumentFragment自身 而是它的所有子孙节点 即插入的是括号里的节点 这个特性使得 DocumentFragment成为了占位符 暂时存放那些一次性文档的节点 它还有利于实现文档的剪切 复制 和黏贴操作

另外 当需要添加多个DOM 元素时 如果将这些元素添加DocumentFragment中 再统一将DocumentFragment 添加到页面会减少dom到次数 效率会明显提升

## requesAnimationFrame

requesAnimationFrame比起 setTimeout,setInterval 的优势主要有两点

1.requesAnimationFrame 会把每一帧中的所有DOM操作集中起来 在一次重绘或者回流中就完成 并且重绘或者回流的时间间隔紧紧跟随浏览器的刷新频率一般来说 这个频率为每秒60帧

2.在隐藏或者不可见的元素中 requesAnimationFrame 将不会进行重绘或者回流 这当然就意味着更少的cpu gpu和内存的使用量



```js
setTimeout(()=>{
  //插入十万条数据
  const total=100000;
  //一次插入的数据
  const once=20;
  //插入数据需要的次数
  const loopCount=Math.ceil(total/once)
  let countOfRender=0;

  const ul=document.querySelector('ul');

  //添加数据的方法
  function add(){
    
  }
})



```
