<template>
  <nav id="menubar" class="menubar">
    <div class="inr">
      <ul class="menu">
        <li><router-link class="bt" to="/">Home</router-link> </li>
        <li><router-link class="bt" to="/list">Board</router-link></li>
        <li><a href="javascript:;" class="bt">Photo</a></li>
        <li>
          <router-link v-if="userstate == 'false'" class="bt" to="/signin">Login</router-link>
          <router-link v-if="userstate == 'true'" class="bt" to="/signout">Logout</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>


export default {
  name: 'NavItem',
  props: {
    userstate: String
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
