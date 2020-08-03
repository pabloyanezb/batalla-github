<template>
  <b-row align-h="center">
    <b-col col lg="4" sm="6">
      <b-card
        bg-variant="dark"
        :header="msg"
        text-variant="white"
        class="text-center"
      >
        
        <b-form class="form">
          <b-row>
            <b-col col sm="8">
              <b-form-input size="m" placeholder="Search" v-model="usuario"></b-form-input>
            </b-col>
            <b-col col sm="2">
              <b-button size="m" type="submit" @click="cargarDatos">Search</b-button>
            </b-col>
          </b-row>
        </b-form>
        <b-avatar :src="avatar" size="6rem" rounded></b-avatar>
        <h3>Username: {{ nombre }}</h3>
        <b-row class="tabla">
          <b-col col sm="8" class="left">
            <h5>Repositorios Públicos</h5>
            <h5>Seguidores</h5>
            <h5>Seguidos</h5>
            <h5>Guists</h5>
            <h5 class="font-weight-bold">Puntaje Total</h5>
          </b-col>
          <b-col col sm="4">
            <h5>{{ repositorios }}</h5>
            <h5>{{ seguidores }}</h5>
            <h5>{{ seguidos }}</h5>
            <h5>{{ gists }}</h5>
            <h5 class="font-weight-bold">{{ puntaje }}</h5>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Jugador",
  props: {
    msg: String,
  },
  data() {
    return {
      usuario: 'pabloyanezb',
      avatar: null,
      nombre: null,
      repositorios: null,
      seguidores: null,
      seguidos: null,
      gists: null,
      puntaje: null
    }
  },
  methods: {
    cargarDatos() {
      this.axios.get(`https://api.github.com/users/${this.usuario}`)
      .then((datos) => {
        const usuario = datos.data;
        this.avatar = usuario.avatar_url;
        this.nombre = usuario.login;
        this.repositorios = usuario.public_repos;          
        this.seguidores = usuario.followers;
        this.seguidos = usuario.following;
        this.gists = usuario.public_gists;
        this.puntaje = usuario.public_repos + usuario.followers + usuario.following + usuario.public_gists;
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
  margin-top: 1rem;
}
.left {
  text-align: start;
}
.hidden_header {
  display: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
