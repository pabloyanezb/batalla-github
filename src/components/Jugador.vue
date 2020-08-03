<template>
  <b-row align-h="center">
    <b-col col lg="4" sm="6">
      <b-card
        bg-variant="dark"
        :header="msg"
        text-variant="white"
        class="text-center"
      >
        <b-avatar :src="avatar" size="6rem" rounded></b-avatar>
        <h3>Username: {{ usuario }}</h3>
        <b-row class="tabla">
          <b-col col sm="8" class="left">
            <h5>Repositorios Públicos</h5>
            <h5>Seguidores</h5>
            <h5>Seguidos</h5>
            <h5>Guists Públicos</h5>
            <h5 class="font-weight-bold">Puntaje Total</h5>
          </b-col>
          <b-col col sm="4">
            <h5>{{repositorios}}</h5>
            <h5>{{seguidores}}</h5>
            <h5>{{seguidos}}</h5>
            <h5>{{gists}}</h5>
            <h5 class="font-weight-bold">{{puntaje}}</h5>
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
      avatar: null,
      usuario: null,
      repositorios: null,
      seguidores: null,
      seguidos: null,
      gists: null,
      puntaje: null
    }
  },
  mounted() {
    this.axios.get('https://api.github.com/users/pabloyanezb')
    .then((datos) => {
      this.avatar = datos.data.avatar_url;
      this.usuario = datos.data.login;
      this.repositorios = datos.data.public_repos;
      this.seguidores = datos.data.followers;
      this.seguidos = datos.data.following;
      this.gists = datos.data.public_gists;
      this.puntaje = datos.data.public_repos + datos.data.followers + datos.data.following;
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
