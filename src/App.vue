<template>
  <Header/>
  <Nav/>
  <div class="container">
    <main class="contents">
      <HelloWorld/>
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    HelloWorld
  }
}
</script>

<style>

</style>
