<template>
  <div id="app">
    <Jugador msg="Jugador 1"/>
  </div>
</template>

<script>
import Jugador from './components/Jugador.vue'

export default {
  name: 'App',
  components: {
    Jugador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
