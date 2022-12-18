<template>
  
  <router-view  name="Header" ></router-view>
  <router-view  name="HeaderSub" ></router-view>
  <router-view v-slot="{ Component }" class="page" >
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <router-view  name="Nav" ></router-view>

</template>

<script>


import Home from './views/Home.vue';
import Nav from './components/Nav.vue';
import Header from './components/Header.vue';
import store from './store';
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
    console.log(store.state.userInfo);
  },
  watch(){
  },
  methods:{
    authState(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // 사용자 로그인 시 동작
          // this.userstate = "true";
          // this.userInfo = user;
          // ui.userinfo.stat = "true";
          // ui.userinfo.email = user.email;
          // ui.userinfo.uid = user.uid;
          
          
          store.state.userInfo.stat = true;
          store.state.userInfo.email = user.email;
          store.state.userInfo.phone = user.phone;
          store.state.userInfo.uid = user.uid;
          console.log('login 된 상태', user);
          console.table(store.state.userInfo);
          return;
        }
        // 사용자 로그아웃 시 동작
        // this.userstate = "false";
        // this.userInfo = null;
        // ui.userinfo.stat = "false";
        // ui.userinfo.uid = "";

        store.state.userInfo.stat = false;
        store.state.userInfo.email = null;
        store.state.userInfo.phone = null;
        store.state.userInfo.uid = null;

        console.log('logout 된 상태' , store.state.userInfo);
        console.table(store.state.userInfo);
        
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
