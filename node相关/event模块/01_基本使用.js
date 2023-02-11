const EventEmitter=require('events');

//创建EventEmitter 的实例

const emitter=new EventEmitter();

//  监听事件
emitter.on('why',(res)=>{
  console.log('监听why事件');
})

// 发射事件
emitter.emit('why')

//取消事件监听


emitter.off('why')

