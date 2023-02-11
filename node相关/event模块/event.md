## node核心API 都是基于异步事件驱动的
在这个体系中 某些对象（发射器emitters）发出某一个事件

我们可以监听这个事件（监听器 Listenres） 并且传入的回调函数 这个回调函数会在监听到的事件调用

发出事件和监听事件都是通过EvenEmitter类来完成的 他们都属于event对象

emitter.on() 监听事件
emitter.off() 移除事件
emitter.emit() 发出事件