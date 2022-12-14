<template>
  
  <router-view  name="Header" :userstate="this.userstate" :userInfo="this.userInfo"></router-view>
  <router-view  name="HeaderSub" :userstate="this.userstate" :userInfo="this.userInfo"></router-view>
  <router-view v-slot="{ Component }" class="page" :userstate="this.userstate" :userInfo="this.userInfo">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <router-view  name="Nav" :userstate="this.userstate"></router-view>

</template>

<script>


import Home from './views/Home.vue';
import Nav from './components/Nav.vue';
import Header from './components/Header.vue';
// import ui from '../public/js/ui.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Home
  },
  props: {
    // userstate: String
  },
  data() {
      return {
        userstate:"false",
        userInfo:{}
      }
  },
  created(){
    ui.init();
  },
  mounted(){

    this.authState();
    // console.log(this.userstate);
  },
  watch(){
  },
  methods:{
    authState(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // 사용자 로그인 시 동작
          this.userstate = "true";
          this.userInfo = user;
          console.log('login 된 상태' , user ,this.userstate );
          ui.userinfo.stat = "true";
          ui.userinfo.email = user.email;
          ui.userinfo.uid = user.uid;
          return;
        }
        // 사용자 로그아웃 시 동작
        this.userstate = "false";
        this.userInfo = null;
        ui.userinfo.stat = "false";
        ui.userinfo.uid = "";
        console.log('logout 된 상태' , this.userstate);
        
      });
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
