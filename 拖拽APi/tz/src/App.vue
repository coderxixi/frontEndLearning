<script setup>
const data= {
  weekday: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
  time_slot: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30'],
  coursee: {
    chinese: {
      name: '语文',
      teachers: ['张三', '李四']
    },
    mathmatics: {
      name: '数学',
      teachers: ['王五', '赵六']
    },
    english: {
      name: '英语',
      teachers: ['田七', '杨八']
    }
  }
}
</script>

<template>
     <div class="board">
         <div class="left"></div>
         <div class="rigth">
          <table border="1"></table>
         </div>
         <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
     </div>
</template>

<style scoped lang="less">
.board{
  position: relative;
  .left{
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 100%;
    background-color: skyblue;
  }
 .rigth{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    padding-left: 300px;
    box-sizing: border-box;
    height: 800px;
    // background-color: red;
  }
  
}

</style>
