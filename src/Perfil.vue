<template>
  <div class="container-fluid">
    <img class = "img" src="./assets/portada.png">
      <div class="container-fluid">
      <!-- Control the column width, and how they should appear on different devices -->
      <div class="row">
        <div class="col-sm-6" style="background-color:#FFF7E9;">
            <div class="w3-container">
                <br>
              <img class= "img" :src=info.foto >
  <h2>{{info.nombre}}</h2>
  <p>{{info.descripcion}}</p>
  <table class="table">
    <tbody>
      <tr>
        <th scope="row">Sexo</th>
        <td>{{info.sexo}}</td>
      </tr>
      <tr>
        <th scope="row">Edad</th>
        <td>{{info.edad}}</td>
      </tr>
      <tr>
        <th scope="row">Vivienda</th>
        <td>{{info.vivienda}}</td>
      </tr>
      <tr>
        <th scope="row" >Adoptado</th>
        <td v-if="info.estado === true">Disponible</td>
        <td v-else> No disponible</td>

      </tr>
    </tbody>
  </table>
</div>

        </div>
        <div class="col-sm-6" style="background-color:#F7F2C2 ;">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <br>
              <h2>¿Cómo adoptar?</h2>
              <ul class="a">
                <li>Los perros son animales extraordinarios pero tienen una serie de necesidades que no puedes pasar por alto. Los paseos diarios, la rutina de cuidados, así como los tiempos de juego y la socialización con otros perros. Si ya has valorado todos estos aspectos y decides seguir adelante con la adopción.</li>
                <li>Envian un mensaje para ponerte en contacto con el dueño temporal explicando por qué te gustaría adoptar a este perro</li>
                <li>En el mensaje deja tu número de teléfono para que se pongan en contacto contigo</li>
              </ul>
              <div class="card">
                <div class="card-body">
                  <form @submit="formSubmit">
                    <strong>Escribe tu solicitud:</strong>
                      <textarea class="form-control" v-model="texto"></textarea>
                      <br/>
                      <button class="btn btn-success" >Enviar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br>
        </div>
      </div>
      <br>
    </div>
    <notifications group="mensaje" />
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default{
  data () {
    return {
      info: null,
      id_perro: '',
      texto: '',
      output: ''
    }
  },
  mounted () {
    Vue.axios.get('http://localhost:3000/perfil/'+ this.$route.params.id).then((response) => {
      console.log(response.data)
      this.info = response.data;
    })
  },
  methods: {
    formSubmit(e) {
        e.preventDefault();
        if(this.texto !=""){
          let currentObj = this;
          this.axios.post('http://localhost:3000/adopcion', {
              texto: this.texto,
              id_perro: this.$route.params.id,
              respuesta: true
          })
          .then(function (response) {
            console.log('AAAAAAA');
              e.target.reset();

          })
          .catch(function (error) {
              currentObj.output = error;

          });
          this.$notify({
            group: 'mensaje',
            text: 'Tu solicitud fue enviada!'
          });
        }
        else {
          this.$notify({
            group: 'mensaje',
            text: 'Debes llenar el campo'
          });
        }

    }
  }
}
</script>

<style type="text/css">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
.img {
  width: 45%;
  height: auto;
  align-items: center;
}
ul.a {list-style-type: circle;
  text-align: justify;}
.container-fluid{
  margin-top: 100 px;
}
</style>
