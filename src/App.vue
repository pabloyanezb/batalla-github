<template>
  <div id="app">
    <h2>Batalla de GitHub</h2>
    <b-row>
      <b-col col lg="8" offset-lg="2" m="12">
        <b-row class="row">
          <Jugador jugador="1"/>
          <Jugador jugador="2"/>
        </b-row>
      </b-col>
    </b-row>
    <div>
      <b-button v-b-modal.modal-center class="mx-auto boton" size="lg" @click="Battle">Comparar Puntajes</b-button>
      <b-modal id="modal-center" centered>
        <h2 v-if="!empate" class="my-4">Ha ganado {{ ganador }}  !!!</h2>
        <h2 v-if="empate" class="my-4">Hubo un empate</h2>
      </b-modal>
    </div>
  </div>
</template>

<script>
import Jugador from './components/Jugador.vue'

export default {
  name: 'App',
  components: {
    Jugador
  },
  data() {
    return {
      ganador: '',
      empate: false
    }
  },
  methods: {
    Battle() {
      const puntaje1 = this.$store.state.puntaje1;
      const puntaje2 = this.$store.state.puntaje2;
      if (puntaje1 > puntaje2) {
        this.ganador = this.$store.state.nombre1;
        this.empate = false;
      } else if (puntaje1 < puntaje2) {
        this.ganador = this.$store.state.nombre2;
        this.empate = false;
      } else {
        this.empate = true;
      }
    }
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
  background-color: #e0e7f6;
  height: 100vh;
  overflow: auto;
}
h2 {
  font-weight: bolder !important;
  margin: 1rem !important;
}
.row {
  margin: 5px  0 !important;
}
</style>
