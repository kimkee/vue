<template>

  <router-view  name="Header" ></router-view>
  <router-view  name="HeaderSub" ></router-view>
  <router-view v-slot="{ Component }" class="page">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <router-view  name="Nav" ></router-view>

</template>

<script>

import ui from './ui.js';
import store from './store';
export default {
  name: 'App',
  components: {
    
         
  },
  props: {
    // userstate: String
  },
  data() {
      return {
        test:"ddd"
      }
  },
  beforeCreate(){
    console.log("beforCreate" );
    const info = JSON.parse(  sessionStorage.getItem("user") )
    if(info){
      store.state.userInfo.stat = true;
      store.state.userInfo.uid = info?.uid;
      store.state.userInfo.email = info?.email;
      store.state.userInfo.join = new Date( parseInt(info?.createdAt) );
    }
  },
  created(){
    ui.init();
    
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
    /* authState(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        console.log("authState" , user);
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
        store.state.userInfo.stat = true;
        store.state.userInfo.email = docSnap.data().email;
        store.state.userInfo.avatar = docSnap.data().avatar;
        store.state.userInfo.nick = docSnap.data().nick;
        store.state.userInfo.uid = user.uid;
        store.state.userInfo.liked = docSnap.data().liked;
        console.table(store.state.userInfo);
      } catch(error) {
        console.log(error)
      }
    } */
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
