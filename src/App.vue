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
    }
  }
}
</script>
