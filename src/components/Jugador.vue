<template>
    <b-col col sm="6">
      <b-card
        bg-variant="dark"
        text-variant="white"
        class="text-center"
      >  
        <h3>Nombre de usuario:</h3>
        <b-form class="form">
          <b-input-group class="mt-3">
            <b-form-input placeholder="Usuario" v-model="nombre"></b-form-input>
            <b-button type="submit" @click.prevent="cargarDatos">Buscar</b-button>
          </b-input-group>
        </b-form>
        <b-overlay :show="isLoading" rounded="sm" variant="dark">
          <b-avatar :src="avatar" size="6rem" rounded></b-avatar>
          <div class="tabla" :aria-hidden="isLoading ? 'false' : null">
            <b-row>
              <b-col col sm="8" class="left">
                <h5>Repositorios Públicos</h5>
              </b-col>
              <b-col col sm="4">
                <h5>{{ repositorios }}</h5>
              </b-col>
            </b-row>
            <b-row>
              <b-col col sm="8" class="left">
                <h5>Seguidores</h5>
              </b-col>
              <b-col col sm="4">
                <h5>{{ seguidores }}</h5>
              </b-col>
            </b-row>
            <b-row>
              <b-col col sm="8" class="left">
                <h5>Seguidos</h5>
              </b-col>
              <b-col col sm="4">
                <h5>{{ seguidos }}</h5>
              </b-col>
            </b-row>
            <b-row>
              <b-col col sm="8" class="left">
                <h5>Gists Públicos</h5>
              </b-col>
              <b-col col sm="4">
                <h5>{{ gists }}</h5>
              </b-col>
            </b-row>
            <b-row>
              <b-col col sm="8" class="left">
                <h5 class="font-weight-bold">Puntaje Total</h5>
              </b-col>
              <b-col col sm="4">
                <h5 class="font-weight-bold">{{ puntaje }}</h5>
              </b-col>
            </b-row>
          </div>
        </b-overlay>
        <b-modal id="modal-error"  ref="modal-error" centered>
          <h4> Usuario  no encontrado. Intentelo nuevamente. </h4>
        </b-modal>
      </b-card>
    </b-col>
</template>

<script>
export default {
  name: "Jugador",
  props: {
    jugador: String,
  },
  data() {
    return {
      isLoading: false,
      nombre: 'pabloyanezb',
      avatar: null,
      repositorios: null,
      seguidores: null,
      seguidos: null,
      gists: null,
      puntaje: null
    }
  },
  methods: {
    cargarDatos() {
      this.axios.get(`https://api.github.com/users/${this.nombre}`)
      .then((datos) => {
        this.isLoading = true;
        const usuario = datos.data;
        this.avatar = usuario.avatar_url;
        this.nombre = usuario.login;
        this.repositorios = usuario.public_repos;          
        this.seguidores = usuario.followers;
        this.seguidos = usuario.following;
        this.gists = usuario.public_gists;
        this.puntaje = usuario.public_repos + usuario.followers + usuario.following + usuario.public_gists;
        if (this.jugador === '1'){
          this.$store.commit('Update1', {puntaje: this.puntaje, nombre: this.nombre});
        }
        if (this.jugador === '2'){
          this.$store.commit('Update2', {puntaje: this.puntaje, nombre: this.nombre});
        }
        this.isLoading = false;
      })
      .catch(error => {
        if(error.response.status == 404){
          this.$refs['modal-error'].show()
        } else {
          console.log(error)
        }
      })
    }
  },
  mounted() {
    this.cargarDatos();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  margin-bottom: 1rem;
}
.tabla {
  margin-top: 2rem;
}
.left {
  text-align: start;
  padding-left: 40px;
}
</style>
