import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.prototype.axios = axios;

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    puntaje1: 0,
    puntaje2: 0,
    nombre1: '',
    nombre2: ''
  },
  mutations: {
    Update1(state,datos) {
      state.puntaje1 = datos.puntaje;
      state.nombre1 = datos.nombre;
    },
    Update2(state,datos) {
      state.puntaje2 = datos.puntaje;
      state.nombre2 = datos.nombre;
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
