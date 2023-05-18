

<template>
   <div class="grid">
      <div class="item" v-for="(url,i) in images">
        <img 
        :src="url"
         alt=""
         @mouseenter="handlemouseEnter($event.target,i)"
         @mouseleave="handleMouseLeave"
         :style="{
          opacity:hoverIndex==-1?1:i===hoverIndex?1:0.2
         }"
         crossorigin="anonymous"
         >
      </div>
   </div>
</template>
<script setup>
import ColorThief from "colorthief"
import { ref } from 'vue';
const colorThief=new ColorThief();
const images=[];
for(let i=1;i<=4;i++){
  images.push(`https://picsum.photos/400/400?r=${i}`)
}
const html=document.documentElement
const hoverIndex=ref(-1);
async function handlemouseEnter(img,i){
  console.log('img',img);
  hoverIndex.value=i;
  //得到这张图片的调色盘(前三种主要的颜色)
 const colors= await colorThief.getPalette(img,3);
 console.log('colors', colors);
 const [c1,c2,c3]= colors.map((c)=>`rgb(${c[0]},${c[1]},${c[2]})`);
  html.style.setProperty('--c1',c1);
   html.style.setProperty('--c2', c2);
    html.style.setProperty('--c3', c3);
}

function handleMouseLeave(){
  hoverIndex.value=-1;
   html.style.setProperty('--c1', '#fff');
  html.style.setProperty('--c2', '#fff');
  html.style.setProperty('--c3', '#fff');
}

const count = ref(0)
</script>
<style scoped>
.grid{
  width: 80%;
  height: 400px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  justify-content: center;
  margin: 0 auto;
}
.item{
 
   

}
img{
    width: 100%;
    height: 100%;
   }
  
</style>
