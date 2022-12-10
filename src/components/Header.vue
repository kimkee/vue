<template>
  <header class="header">
    <div class="inr">
      <div class="ldt">
        <h1 class="logo"><router-link class="btlogo" to="/">Home</router-link></h1>
      </div>
      <div class="rdt">
        <button type="button" class="bt" onclick="history.back(-1)"><b>뒤로</b></button>
        <button type="button" class="bt gnb"><b>메뉴</b></button>
      </div>
    </div>
  </header>
</template>

<script>


export default {
  name: 'HeaderItem',
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
