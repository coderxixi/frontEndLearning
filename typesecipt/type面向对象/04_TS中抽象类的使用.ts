
//抽象类
abstract class Shape {
  //getArea 只有声明没有实现体  来子类自己来实现
  abstract getArea()
}
class Circle extends Shape {
  constructor(public radius: number) {
    super()
  }
  getArea() {
    return this.radius ** 2 * Math.PI
  }
}
class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }
  getArea() {
    return this.width * this.height
  }
}
class Triangle extends Shape {
  getArea(){
    return 100
  }
}

// 通用的函数
function getArea(shape: Shape) {
  return shape.getArea()
}
getArea(new Rectangle(10, 20));
getArea(new Circle(10));
getArea(new Triangle())





