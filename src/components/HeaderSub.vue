<template>
  <header class="header sub">
    <div class="inr">
      <div class="ldt">
        <button type="button" class="bt back" @click="$router.go(-1);"><i class="fa-solid fa-arrow-left"></i>뒤로</button>
        <h3 class="htit"></h3>
      </div>
      <div class="cdt"></div>
      <div class="rdt">
        <router-link class="user" :to="`/user/${$store.state.userInfo.uid}`">
        <!-- <router-link class="user" :to="{ name: 'user', params: { id: $store.state.userInfo.uid }}"> -->
          <span class="pic"><img :src="$store.state.avatar[$store.state.userInfo.avatar]" alt="" class="img"></span>
          <span class="txt">{{$store.state.userInfo.nick}}</span>
        </router-link>
        <button type="button" class="bt gnb" id="btn-gnb" @click="gnbOpen"><i class="fa-solid fa-bars"></i><b>메뉴</b></button>
      </div>
    </div>
  </header>
  <Gnb/>
</template>

<script>
import Gnb from '@/components/Gnb.vue'
import ui from '@/ui.js';
export default {
  name: 'HeaderSubItem',
  components: {
    Gnb,
  },
  props: {
    userstate: String,
    userInfo: Object
  },
  data() {
      return {
          
      }
  },
  unmounted(){
    
  },
  methods:{
    gnbOpen(){
      ui.gnb.using("open");
    }
  }
}
</script>
