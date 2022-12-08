<template>
  <div class="container home">
    <main class="contents">
      <h1>홈</h1> 
      
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
      return {
          
      }
  },
  created(){
    console.log("home created");
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("../assets/css/style.css"); */
</style>
