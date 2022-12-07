<template>
  <img alt="Vue logo" class="logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left; color: #2c3e50;
  margin-top: 20px;
}
#app .logo{width: 40px;}
</style>
