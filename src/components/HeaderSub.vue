<template>
  <header class="header sub">
    <div class="inr">
      <div class="ldt">
        <button type="button" class="bt back" onclick="history.back(-1)">뒤로</button>
      </div>
      <div class="cdt"><h3 class="htit"></h3></div>
      <div class="rdt">
        <router-link class="bt gnb" to="/"><b>메뉴</b></router-link> 
      </div>
    </div>
  </header>
</template>

<script>


export default {
  name: 'HeaderSubItem',
  props: {
    
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
