<template>
  
  <nav class="gnb" id="gnb">
    <div class="bts"><button class="bt close" tabindex="-1"><i class="fa-solid fa-xmark"></i></button></div>
    <div class="inr">
      <ul class="menu">
        <li><router-link class="bt" to="/"><i class="fa-solid fa-house"></i> <em>Home</em></router-link></li>
        <li><router-link class="bt" to="/list"><i class="fa-solid fa-list"></i> <em>Board</em></router-link></li>
        <li><router-link class="bt" to="/photo"><i class="fa-solid fa-camera"></i> <em>Photo</em></router-link></li>
        <li><router-link class="bt" to="/works"><i class="fa-solid fa-briefcase"></i> <em>Works</em></router-link></li>
        <!-- <li><a href="javascript:;" class="bt">Contact</a></li>
        <li><a href="javascript:;" class="bt">Sign in</a></li> -->
      </ul>
      <!-- {{$store.state.userInfo.stat}} {{$store.state.userInfo.email}} -->
      <div class="sign">
        <div class="user"><span class="pic"><img :src="$store.state.avatar[$store.state.userInfo.avatar]" alt="" class="img"></span> <span class="txt">{{$store.state.userInfo.nick}}</span></div>
        <div v-if="$store.state.userInfo.stat == true" class="bt email"><i class="fa-solid fa-envelope"></i> <em>{{$store.state.userInfo.email}}</em></div>
        
        <!-- <div v-if="userstate == true">로긴됨</div>
        <div v-if="userstate == false">로긴아웃</div> -->
        <div class="bts">
          <router-link v-if="$store.state.userInfo.stat == false" class="bt" to="/signin"><i class="fa-solid fa-right-to-bracket"></i><em> Login</em></router-link>
          <router-link v-if="$store.state.userInfo.stat == false" class="bt" to="/signup"><i class="fa-solid fa-user-plus"></i><em> Join</em></router-link>
          
          <router-link v-if="$store.state.userInfo.stat == true" class="bt" to="/signout"><i class="fa-solid fa-right-from-bracket"></i><em>Logout</em></router-link>
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
