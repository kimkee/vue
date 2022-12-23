<template>
  <header class="header">
    <div class="inr">
      <div class="ldt">
        <h1 class="logo"><router-link class="btlogo" to="/">Home</router-link></h1>
      </div>
      <div class="rdt">
        <div class="user">
          <span class="pic"><img :src="$store.state.avatar[$store.state.userInfo.avatar]" alt="" class="img"></span>
          <span class="txt">{{$store.state.userInfo.nick}}</span>
        </div>
        <button type="button" class="bt gnb" id="btn-gnb" @click="gnbOpen"><i class="fa-solid fa-bars"></i><b>메뉴</b></button>
      </div>
    </div>
  </header>

  <Gnb/>

</template>

<script>

import Gnb from '../components/Gnb.vue'

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
    gnbOpen(){
      ui.gnb.using("open");
    }
  }
}
</script>

<style scoped>
</style>
