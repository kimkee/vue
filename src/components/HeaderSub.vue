<template>
  <header class="header sub">
    <div class="inr">
      <div class="ldt">
        <button type="button" class="bt back" onclick="history.back(-1)">뒤로</button>
      </div>
      <div class="cdt"><h3 class="tit">목록</h3></div>
      <div class="rdt">
        <button type="button" class="bt gnb"><b>메뉴</b></button>
      </div>
    </div>
  </header>
</template>

<script>


export default {
  name: 'Header',
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
