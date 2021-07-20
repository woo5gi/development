<template>
  <img alt="Vue logo" src="./assets/logo.png">
<div class="black-bg" v-if="모달창열렸니 == true">
  <div class="white-bg">
    <h4>상세페이지</h4>
    <p>상세페이지내용임</p>
  <button @click="모달창열렸니 = false">닫기</button>
  </div>
</div>

<div class="menu">
  <a v-for="작명 in 메뉴들" :key="작명">{{작명}}</a>
</div>
<div>
  <img :src="원룸들[0].image"> 
  <h4 @click="모달창열렸니 = true">{{products[0]}}</h4>
  <p>50만원</p>
  <button @click="신고수++">허위매물신고</button>
  <span>신고수 : {{신고수}}</span>
</div>
<div>
  <img src="./assets/room1.jpg"> 
  <h4>{{원룸들[0].title}}</h4>
  <p>{{원룸들[0].price}}원</p>
</div>

<div>
  <h4>{{products[1]}}</h4>
  <p>50만원</p>
</div>
<div>
  <h4>{{products[2]}}</h4>
  <p>50만원</p>
</div>
</template>

<script>

import data from './assets/oneroom.js'

export default {
  name: 'App',
  // 데이터 보관함
  data(){
    return {
      원룸들 : data,
      모달창열렸니 : false,
      신고수 : 0,
      price1 : 60,
      price2 : 70,
      스타일 : 'color : blue',
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      메뉴들 : ['Home', 'Shop', 'About']
    }
  },
  components: {
  }
}
</script>

<style>
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color : white;
  padding : 10px;
}
</style>
