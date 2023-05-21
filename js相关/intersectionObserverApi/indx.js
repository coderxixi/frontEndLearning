const ob=new IntersectionObserver((entres)=>{
  for (const entry of entres){
    if(entry.isIntersecting){
      const img=entry.target;
      img.src=img.dataset.src;
      ob.unobserve(img)
    }

 }
},{
 
  threshold:0,
})

const imgs=document.querySelectorAll('img[data-src');
imgs.forEach(img=>{

  ob.observe(img)
})