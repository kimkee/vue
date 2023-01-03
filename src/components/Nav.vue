<template>
  <nav id="menubar" class="menubar">
    <div class="inr">
      <ul class="menu">
        <li><router-link class="bt" to="/"><i class="fa-solid fa-house"></i><em>Home</em></router-link></li>
        <li><router-link class="bt" to="/bbs"><i class="fa-solid fa-list"></i><em>Board</em></router-link></li>
        <li><router-link class="bt" to="/photo"><i class="fa-solid fa-camera"></i><em>Photo</em></router-link></li>
        <li><router-link class="bt" to="/works"><i class="fa-solid fa-briefcase"></i><em>Works</em></router-link></li>
        <li>
          <router-link v-if="$store.state.userInfo.stat == false" class="bt" to="/signin"><i class="fa-solid fa-user"></i><em> Login</em></router-link>
          <router-link v-if="$store.state.userInfo.stat == true" class="bt" to="/signout"><i class="fa-solid fa-right-from-bracket"></i><em>Logout</em></router-link>
        </li>
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
