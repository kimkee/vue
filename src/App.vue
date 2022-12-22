<template>
  
  <router-view  name="Header" ></router-view>
  <router-view  name="HeaderSub" ></router-view>
  <router-view v-slot="{ Component }" class="page" @load="makeSomeStuff">
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
import db  from './firebaseConfig.js';
import store from './store';
// import ui from '../public/js/ui.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDoc, doc } from "firebase/firestore";

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
        
      }
  },
  beforeCreate(){
    console.log("beforCreate" );
  },
  created(){
    ui.init();
    this.authState();
  },
  watch(){
    
  },
  mounted(){
    console.log(store.state.userInfo);
  },
  unmounted(){
  },
  updated(){
    console.log("updated");  
  },
  methods:{
    makeSomeStuff(){
      console.log("makeSomeStuff");
    },
    authState(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.getUser(user);   
          return;
        }
        store.state.userInfo = {};
        store.state.userInfo.stat = false;
        console.log('logout 된 상태' , store.state.userInfo);
        console.table(store.state.userInfo);
        
      });
    },
    async getUser(user){
      const docRef =  doc(db, "member" , user.uid);
      try {
        const docSnap = await getDoc(docRef);
        console.log( docSnap.data().nick);

        store.state.userInfo.stat = true;
        store.state.userInfo.email = docSnap.data().email;
        store.state.userInfo.avatar = docSnap.data().avatar;
        store.state.userInfo.nick = docSnap.data().nick;
        store.state.userInfo.uid = user.uid;
        store.state.userInfo.liked = docSnap.data().liked;
        console.log('login 된 상태', user);
        console.table(store.state.userInfo);


      } catch(error) {
        console.log(error)
      }
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
