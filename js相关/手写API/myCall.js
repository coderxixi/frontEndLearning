

Function.prototype.myCall=function(context){
  // 1将函数设为对象的属性
  // 2执行该函数
  // 3删除该函数

  var context = context || window;
  context.fn = this;

  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
      args.push('arguments[' + i + ']');
  }

  var result = eval('context.fn(' + args +')');

  delete context.fn
  return result;
}