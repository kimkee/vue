<template>
  <div class="container home">
    <main class="contents">

      <div class="mn-box">
        <div class="top"><router-link class="bt" to="/list"><img src="../../public/img/logo.png" alt=""></router-link></div>
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

export default {
  name: 'HomeItem',
  components: {
    RecentPost
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
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../assets/css/style.css"); */
</style>
