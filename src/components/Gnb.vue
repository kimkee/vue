<template>
  
  <nav class="gnb" id="gnb">
    <div class="bts"><button class="bt close" tabindex="-1">메뉴닫기</button></div>
    <div class="inr">
      <ul class="menu">
        <li><router-link class="bt" to="/">Home</router-link></li>
        <li><router-link class="bt" to="/list">Board</router-link></li>
        <!-- <li><a href="javascript:;" class="bt">Contact</a></li>
        <li><a href="javascript:;" class="bt">Sign in</a></li> -->
      </ul>
      <div class="sign">
        <router-link class="bt" to="/signin">Login</router-link>
        <router-link class="bt" to="/signup">Join</router-link>
      </div>
    </div>
  </nav>
  <div class="gnb-screen" tabindex="-1"></div>

</template>

<script>


export default {
  name: 'GnbItem',
  props: {
    
  },
  data() {
      return {
          
      }
  },
  created(){

  },
  methods:{
    
  }
}
</script>

<style scoped>
</style>
