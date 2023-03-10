### 事件循环

浏览器的进程模型

## 何为进程？

程序运行需要有它自己的专属内存空间 可以把这块内存空间简单的理解为进程

每个应用至少有一个进程 进程之间相互独立 即使要通信 也需要双方同意 

## 何为线程？

有了进程后 就可以运行程序代码了
运行代码的 人 程之为线程 ，一个进程至少有一个线程 所以在进程开启会自动创建一个线程来运行代码 该线程称之为主线程 如果程序需要同时执行多块代码 主线程就好启动更多的线程来执行代码 所以一个进程中可以包含多个线程

## 浏览器有哪些进程和线程
浏览器是一个多进程多线程的应用程序

浏览器内部工作极其复杂

为了避免相互影响为了减少连环奔溃的几率 当启动浏览器后 它会自动启动多个进程

### 浏览器进程
主要负责界面的显示 用户交互 子进程管理等 浏览器进程内部会启动线程处理不同的任务

### 网络进程
负责加载网络资源 网络进程内部会启动多个线程来处理不同的网络任务

### 渲染进程

渲染进程启动后 会开启一个渲染的主线程 主线程负责执行 HTML CSS JS 代码 默认情况下 浏览器会为每个标签开启一个新的渲染进程 以保证不同分标签页之间不相互影响


## 渲染主线程是如何工作的？

渲染主线程是浏览器中最繁忙的线程 需要它处理掉任务包括但不限于：
1.解析HTML
2.解析CSS
3.计算样式
4.布局
5.处理图层
6.每秒把页面画60次
7.执行全局JS代码
8.执行事件处理函数
9.执行计时器的回调函数

### 为什么渲染进程不适用多个进程来处理这些事情

要处理这么多的任务 主线程遇到了一个前所未有的难题:如何调度任务？

主线程想出一个方法来处理这个问题:排队


### 何为异步？
 代码在执行过程中 会遇到一些无法立即处理的任务 比如：
 1.计时完成后需要执行的任务-- setTimeout setInterval

 2.网络通信完成后需要执行的任务 XHR Fetch

 3.用户操作后需要执行的任务-- addEventListener

 如何让渲染主线程等待这些任务的时机达到了就会导致主线程长期处于阻塞的状态从而导致浏览器卡死

 ## 如何 理解JS的异步

 答案：js 是一门单线程的语言这是因为它运行在浏览器的渲染主线程中而渲染主线程只有一个 而渲染主线程承担着诸多的工作 渲染页面 执行js 都在其中运行

 如何使用同步的方式就极有可能导致主线程产生阻塞从而导致消息队列中的很多其它任务无法得到执行这样一来 一方面会导致繁忙的主线程白白的消耗时间 另一方面导致页面无法及时更新 给用户造成卡死现象
 所以浏览器采用异步的方式来避免具体的做法是当某些任务发生时比如计时器网络 ⌚️监听 主线程将任务交给其他线程去处理自身立即结束任务执行 转而执行后续的代码 当其他线程完成时将事先传递的回调函数包装成任务加入到消息队列的末尾排队 等待主线程调度执行 在这种异步模式下浏览器永不阻塞 从而最大限度的保证了单线程的流程运行



 ### 任务有优先级吗？

 任务没有优先级在消息队列中先进先出
 但在消息队列中有优先级
 根据 w3c解释：每个任务都有一个任务类型 同一个任务类型必须在一个队列 不同类型的任务可以分属不同的队列 在一次事件循环中 浏览器可以根据实际情况从不同的队列中取出任务执行

 浏览器必须准备好一个微任务 微任务中的任务优先所有其它任务执行

 在目前chorme的实现 至少包含下面的队列

 延时队列：用于存放计时器到达后的回调任务 优先级中

 交互队列 ：用于存放用户操作后产生的事件处理任务 优先级 高

 微任务：用户存放需要最快执行的任务 优先级 最高

 ### 简述js的事件循环

 事件循环又叫做消息循环 是浏览器渲染主线程的工作方式






