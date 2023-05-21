window.addEventListener('click',(e)=>{
  const ponier=document.createElement('div');
  ponier.classList.add('poiner');
  ponier.style.left=`${e.clientX}px`;
  ponier.style.top = `${e.clientY}px`;
  document.body.appendChild(ponier);
  ponier.addEventListener('animationend',()=>{
    ponier.remove()
  })
});
const ball=document.querySelector('.ball');

function init(){
  const x=window.innerWidth/2;
  const y=window.innerHeight/2;
  ball.style.transform=`translate(${x}px,${y}px)`
  }
  
init();

window.addEventListener('click',(e)=>{
  const x=e.clientX;
  const y=e.clientY;
  move(x,y)

})

function move(x,y){
  const ballRect= ball.getBoundingClientRect();
  const initx=ballRect.left-ballRect.width/2;
  const inity=ballRect.top-ballRect.height/2;
  ball.animate([
    {
      transform: `translate(${initx}px,${inity}px)`
    },
    {
       
      transform: `translate(${x}px,${y}px)`
    
    }
  ],{
    duration:1000,
    fill: 'forwards'
  });
}