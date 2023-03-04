const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');

//初始化
function init() {
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight
}



init()


//绘画


// ctx.beginPath();

// ctx.moveTo(100,50);
// ctx.lineTo(200,100);
// ctx.closePath();
// ctx.strokeStyle="#fff"
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(100,50);
// ctx.arc(100,50,6,0,Math.PI*2);
// ctx.fillStyle="#fff";
// ctx.fill()


// ctx.beginPath();
// ctx.moveTo(100,50);
// ctx.arc(200,100,6,0,Math.PI*2);
// ctx.fillStyle="#fff";
// ctx.fill();


function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min)

}

class Point {
  constructor() {
    this.r = 6
    this.x = getRandom(0, cvs.width - this.r / 2);
    this.y = getRandom(0, cvs.height - this.r / 2);
  }
  draw() {
    ctx.clearRect(0, 0, 300, 300);
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    
  }
}


class Graph {
  constructor(ponitNumber = 30,maxDis=200) {
    this.ponits = new Array(ponitNumber).fill(0).map(() => new Point());
    this.maxDis=maxDis
 
   
  }
  draw() {
      for (let i = 0; i < this.ponits.length; i++) {
        const p1 = this.ponits[i];
        p1.draw();
        for (let j = i + 1; j < this.ponits.length; j++) {
          const p2=this.ponits[j];
          const d= Math.sqrt((p1.x-p2.x)**2 + (p1.y-p2.y)**2);
          if(d>this.maxDis){
            continue
          }
         
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.closePath();
          ctx.strokeStyle = `rgba(200,200,200,${1-d/this.maxDis})`
          ctx.stroke();
        }
      }
      
  }
}
 let p=  new Graph();

p.draw()








