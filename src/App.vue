<template>
  <Header/>
  <Nav/>
  <transition name="fade">
    <router-view />
  </transition>
</template>

<script>


import Home from './components/Home.vue'
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Home
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
