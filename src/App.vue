<template>
  
  <router-view  name="Nav"></router-view>
  <router-view  name="Header"></router-view>
  <router-view  name="HeaderSub"></router-view>
  <router-view v-slot="{ Component }" class="page">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

</template>

<script>


import Home from './views/Home.vue'
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'
// import ui from './ui.js'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Home
  },
  created(){
    
  },
  mounted(){

  },
  methods:{
    
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
