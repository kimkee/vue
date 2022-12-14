<template>
  
  <nav class="gnb" id="gnb">
    <div class="bts"><button class="bt close" tabindex="-1"><i class="fa-solid fa-xmark"></i></button></div>
    <div class="inr">
      <ul class="menu">
        <li><router-link class="bt" to="/">Home</router-link></li>
        <li><router-link class="bt" to="/list">Board</router-link></li>
        <!-- <li><a href="javascript:;" class="bt">Contact</a></li>
        <li><a href="javascript:;" class="bt">Sign in</a></li> -->
      </ul>
      {{userstate}}
      <div class="sign">
        
        <span v-if="userstate == 'true'" class="bt email"><i class="fa-solid fa-envelope"></i><em>{{userInfo.email}}</em></span>
        
        <!-- <div v-if="userstate == true">로긴됨</div>
        <div v-if="userstate == false">로긴아웃</div> -->
        <div class="bts">
          <router-link v-if="userstate == 'false'" class="bt" to="/signin"><i class="fa-solid fa-right-to-bracket"></i><em> Login</em></router-link>
          <router-link v-if="userstate == 'false'" class="bt" to="/signup"><i class="fa-solid fa-user-plus"></i><em> Join</em></router-link>
          
          <router-link v-if="userstate == 'true'" class="bt" to="/signout"><i class="fa-solid fa-right-from-bracket"></i><em>Logout</em></router-link>
        </div>

      </div>
    </div>
  </nav>
  <div class="gnb-screen" tabindex="-1"></div>

</template>

<script>
export default {
  name: 'GnbItem',
  props: {
    userstate: String,
    userInfo: Object
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
