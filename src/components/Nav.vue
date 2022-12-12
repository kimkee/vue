<template>
  <nav id="menubar" class="menubar">
    <div class="inr">
      <ul class="menu">
        <li><router-link class="bt" to="/">Home</router-link> </li>
        <li><router-link class="bt" to="/list">Board</router-link></li>
        <li><a href="javascript:;" class="bt">Contact</a></li>
        <!-- <li><a href="javascript:;" class="bt">Sign in</a></li> -->
        <li><router-link class="bt" to="/signup">Sign up</router-link></li>
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
