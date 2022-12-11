<template>
  <nav id="menubar" class="menubar">
    <div class="inr">
      <ul class="menu">
        <li class="home"><router-link class="bt" to="/">Home</router-link> </li>
        <li class="adds"><router-link class="bt" to="/list">Board</router-link></li>
        <li class="look"><a href="javascript:;" class="bt">Contact</a></li>
        <li class="look"><a href="javascript:;" class="bt">Join</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>


export default {
  name: 'NavItem',
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
