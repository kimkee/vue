<template>
  <!-- <router-view   name="Header"></router-view>
  <router-view   name="Nav"></router-view>
  <router-view class="router"></router-view> -->

  <router-view   name="Nav"></router-view>
  <router-view   name="Header"></router-view>
  <router-view   name="HeaderSub"></router-view>
  <router-view v-slot="{ Component }" class="router">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
