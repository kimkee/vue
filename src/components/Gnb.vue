<template>
  
  <nav class="gnb" id="gnb">
    <div class="bts"><button class="bt close" tabindex="-1" @click="gnbClose"><i class="fa-regular fa-xmark"></i></button></div>
    <div class="inr">
      <ul class="menu">
        <li :class="isActive('/home')"><router-link class="bt" to="/home"><i class="fa-regular fa-house"></i> <em>Home</em></router-link></li>
        <li :class="isActive('/bbs')"><router-link class="bt" to="/bbs"><i class="fa-regular fa-list"></i> <em>Board</em></router-link></li>
        <li :class="isActive('/photo')"><router-link class="bt" to="/photo"><i class="fa-regular fa-camera"></i> <em>Photo</em></router-link></li>
        <li :class="isActive('/chat')"><router-link class="bt" to="/chat"><i class="fa-regular fa-comments"></i> <em>Chat</em></router-link></li>
        <li :class="isActive('/works')"><router-link class="bt" to="/works"><i class="fa-regular fa-briefcase"></i> <em>Works</em></router-link></li>
      </ul>
      <div class="sign">
        <router-link class="user" :to="`/user/${$store.state.userInfo.uid}`">
          <span class="pic"><img :src="$store.state.avatar[$store.state.userInfo.avatar]" alt="" class="img"></span>
          <span class="txt">{{$store.state.userInfo.nick}}</span>
        </router-link>
        <div v-if="$store.state.userInfo.stat == true" class="bt email">
          <i class="fa-regular fa-envelope"></i>
          <em>{{$store.state.userInfo.email}}</em>
        </div>
        <div v-if="$store.state.userInfo.stat == true" class="bt email">
          <i class="fa-regular fa-calendar-days"></i>
          <em>{{ this.joinDate}} 가입</em>
        </div>
        
        <div class="bts">
          <router-link v-if="!$store.state.userInfo.stat" class="bt" to="/signin"><i class="fa-regular fa-right-to-bracket"></i><em> Login</em></router-link>
          <router-link v-if="!$store.state.userInfo.stat" class="bt" to="/signup"><i class="fa-regular fa-user-plus"></i><em> Join</em></router-link>
          
          <router-link v-if="!!$store.state.userInfo.stat" class="bt" to="/signout"><i class="fa-regular fa-right-from-bracket"></i><em>Logout</em></router-link>
        </div>

      </div>
    </div>
  </nav>
  <div class="gnb-screen" tabindex="-1" @click="gnbClose"></div>

</template>

<script>
import ui from '@/ui.js';
import store from '@/store';
export default {
  name: 'GnbItem',
  props: {
    userstate: String,
    userInfo: Object
  },
  data() {
      return {
        joinDate : ui.dateForm(store.state.userInfo.join)
      }
  },
  created(){
  },
  updated(){
    // ui.gnb.using("close");

  },
  methods:{
    gnbClose(){
      ui.gnb.using("close");
    },
    isActive : els => location.hash.includes(els) ? "active" : null
  }
}
</script>

<style scoped>
</style>
