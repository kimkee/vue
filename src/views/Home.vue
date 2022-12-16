<template>
  <div class="container home">
    <main class="contents">


      <div class="ui-loading-dot">
        <div class="bx">
          <em><i></i></em>
        </div>
      </div>

      <Clock/>



      <div class="mn-box">
        <div class="top" onclick="ui.test.using(this.target)"><img src="../../public/img/logo.png" alt=""></div>

        


        <div class="msg">
          <i class="fa-sharp fa-solid fa-cube"></i>
          <p>로그인, 가입</p>
          <p>게시글:[읽기, 쓰기, 수정, 삭제] , 댓글: [읽기,쓰기, 삭제]</p>
        </div>
        <div class="icos">
          <span class="ico"><img src="../../public/img/ico_vue.svg" alt=""></span>
          <span class="pls">+</span>
          <span class="ico"><img src="../../public/img/ico_firebase.svg" alt=""></span>
          <!-- <span><img src="../../public/img/ico_react.svg" alt=""></span> -->
        </div>
      </div>

      <RecentPost/>
      
      
    </main>
  </div>
</template>

<script>
import RecentPost from '../components/RecentPost.vue'
import Clock from '../components/Clock.vue'

export default {
  name: 'HomeItem',
  components: {
    RecentPost,
    Clock
  },
  props: {
    userstate: String
  },
  data() {
      return {
          
      }
  },
  created(){
    ui.init();
    this.init();
  },
  mounted() {
   
  },
  methods:{
    init(){
      
      
    }
  }
}





// document.addEventListener("DOMContentLoaded", clock.init() );




</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
