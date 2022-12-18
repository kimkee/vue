<template>
  <header class="header sub">
    <div class="inr">
      <div class="ldt">
        <button type="button" class="bt back" onclick="history.back(-1)"><i class="fa-solid fa-arrow-left"></i>뒤로</button>
      </div>
      <div class="cdt"><h3 class="htit"></h3></div>
      <div class="rdt">
        <button type="button" class="bt gnb" id="btn-gnb"><i class="fa-solid fa-bars"></i><b>메뉴</b></button>
      </div>
    </div>
  </header>
  <Gnb/>
</template>

<script>
import Gnb from '../components/Gnb.vue'

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
  created(){

  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../assets/css/style.css"); */



</style>
