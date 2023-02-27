function myNew() {
  //1.创建一个新的对象
  var obj = new Object();
  // 2.取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
  Constructor = [].shift.call(arguments);
  //3 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
  obj.__proto__ = Constructor.prototype;
  //4 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
  var ret = Constructor.apply(obj, arguments);
  //5 返回 obj
  return typeof ret === 'object' ? ret : obj;
}