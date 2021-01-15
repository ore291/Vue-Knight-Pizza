<template>
  <Hero />
  <router-view></router-view>
</template>

<script>
import Hero from './components/Hero.vue'

export default {
  name: 'App',
  components: {
    Hero
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
