<template>
  <nav id="menubar" class="menubar">
    <div class="inr">
      <ul class="menu">
        <li class="home"><router-link class="bt" to="/">Home</router-link> </li>
        <li class="adds"><router-link class="bt" to="/list">List</router-link></li>
        <li class="look"><router-link class="bt" to="/list">List</router-link></li>
        <li class="look"><router-link class="bt" to="/list">List</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>


export default {
  name: 'Nav',
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
