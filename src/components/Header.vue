<template>
  <header class="header">
    <div class="inr">
      <div class="ldt">
        <h1 class="logo" @click="testAlert"><router-link class="btlogo" to="/"><i class="fa-brands fa-vuejs"></i></router-link></h1>
      </div>
      <div class="rdt">
        <router-link class="user" :to="`/user/${$store.state.userInfo.uid}`">
          <span class="pic"><img :src="$store.state.avatar[$store.state.userInfo.avatar]" alt="" class="img"></span>
          <span class="txt">{{$store.state.userInfo.nick}}</span>
        </router-link>
        <button type="button" class="bt gnb" id="btn-gnb" @click="gnbOpen"><i class="fa-regular fa-bars"></i><b>메뉴</b></button>
      </div>
    </div>
  </header>

  <Gnb/>

</template>

<script>

import Gnb from '@/components/Gnb.vue'
import ui from '@/ui.js';
export default {
  name: 'HeaderItem',
  components: {
    Gnb,
  },
  props: {

  },
  data() {
      return {
          
      }
  },
  created(){

  },
  methods:{
    testAlert(){
      ui.confirm("쀼 보다 리액트가 짱입니까?",{
        ycb:function(){
          console.log("컴펌 예");
          window.location.href = "https://kimkee.github.io/react"
        },
        ncb:function(){
          console.log("컴펌 아뇨");
        },
        ybt:"마자요!",
        nbt:"아니오!",
      });
    },
    gnbOpen(){
      ui.gnb.using("open");
    }
  }
}
</script>

<style scoped>
</style>
