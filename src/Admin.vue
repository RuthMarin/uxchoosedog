<template>
  <div class="container" >
    <div class="box">
      <img class= "img2" src="./assets/portada.png">
    </div>
    <div class="row"  >
      <div class="col-xs-6 col-md-4" style="background-color:#AA3939;margin-top: 20px; margin-bottom: 20px; align-items:center">
        <div class="card"  v-for="item in solicitudes" style="width: 100%;margin-top: 10 px; ">
          <div class="card-body">
            <h5 class="card-title">Solicitud de adopción</h5>
            <p class="card-text">{{ item.texto }}</p>
            <button class="btn btn-success" @click="postRespuesta(item.id)">Aceptar</button>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-8" style="background-color:#F7F2C2 ; margin-top: 20px; margin-bottom: 20px; " >
        <h3>Formulario para dar en adopción</h3><img class= "imgk" src="./assets/perro.png">
        <div>
          <div>
            <div class="form-group">
              <label>Nombre:</label>
              <input class="form-control" id="email" v-model="perfil_perro.nombre">
            </div>
            <div class="form-group">
              <label >Descripción:</label>
              <input  class="form-control" id="email" v-model="perfil_perro.descripcion">
            </div>
            <div class="form-group">
              <label >Tipo de Vivienda:</label>
              <select name="vivienda" id="vivienda" v-model="perfil_perro.vivienda">
                <option>Casa</option>
                <option>Departamento</option>
                <option>Casa y departamento</option>
              </select>
            </div>
            <div class="form-group">
              <label >Sexo:</label>
              <select name="sexo" id="sexo" v-model="perfil_perro.sexo">
                <option>Macho</option>
                <option>Hembra</option>
              </select>
            </div>
            <div class="form-group">
              <label >Edad:</label>
              <select name="edad" id="edad" v-model="perfil_perro.edad">
                <option value="0">Cachorro: 0 ~ 0.5 años</option>
                <option value="1">Joven: 0.5 ~ 0.75 años</option>
                <option value="2">Adulto: 0.75 ~ 6.5 años</option>
                <option value="3">Maduro: 6.5 ~ 9.75 años</option>
                <option value="4">Mayor: 9.75 ~ 13 años</option>
                <option value="5">Geriatrico: mas de 13 años</option>
              </select>
            </div>
            <button class="btn btn-success" @click="nuevoPerro()">Agregar</button>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col" style="background-color:red;" v-for="it in adoptado"><br><img class= "img3" :src=it.foto >
        <div class="col" style="background-color:#F7F2C2; text-align: center;" >{{it.nombre}} <br>
          <button class="btn btn-success" v-model="statementIsFalse" @click="postPost(it.id)">Adoptado</button><br>
      </div>
      <br>
    </div>
  </div>
  <div>State: <strong>{{ datos }}</strong></div></div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default{
  data () {
    return {
      info: [],
      status: '',
      statementIsFalse: false,
      datos: '',
      numero: '',
      solicitud:'',
      aprobado:'',
      id: '',
      perro:[],
      perfil_perro: {
        errores: [],
        nombre: null,
        descripcion: null,
        vivienda: null,
        sexo: null,
        edad: null,
      },
    }
  },
  created () {
    Vue.axios.get('http://localhost:3000/adopcion/').then((response) => {
      console.log(response.data)
      this.info = response.data;
    })
    Vue.axios.get('http://localhost:3000/perfil/').then((response) => {
      console.log(response.data)
      this.perro = response.data;
    })
  },
  computed: {
    solicitudes: function(){
      return this.info.filter(function(s){
        return s.respuesta
      })
    },
    adoptado: function(){
      return this.perro.filter(function(x){
        return x.estado
      })
    }
  },
  methods: {
    postPost(elemento) {
      this.numero = elemento;
      Vue.axios.get('http://localhost:3000/perfil/'+this.numero).then((response) => {
        console.log(response.data)
        this.datos = response.data;
        this.datos.estado = false;
        axios.put('http://localhost:3000/perfil/'+this.numero, this.datos)
      .then(response => {
      })
      .catch(e => {
        this.errors.push(e)
      })
      axios.get('http://localhost:3000/perfil/').then((response)=>{
        this.perro = response.data;
      })
      })
    },
    postRespuesta(elemento) {
      this.solicitud = elemento;
      Vue.axios.get('http://localhost:3000/adopcion/'+this.solicitud).then((response) => {
        console.log(response.data)
        this.aprobado = response.data;
        this.aprobado.respuesta = false;
        axios.put('http://localhost:3000/adopcion/'+this.solicitud, this.aprobado)
        axios.get('http://localhost:3000/adopcion/').then((response)=>{
          this.info = response.data;
        })
      .then(response => {
      })
      .catch(e => {
        this.errors.push(e)
      })
      })
    },
    nuevoPerro(){
      var numero_imagen
      var edad
      var tags = []
      if(this.perfil_perro.sexo === 'Macho'){
        tags.push('m')
      }
      else if(this.perfil_perro.sexo === 'Hembra'){
        tags.push('h')
      }
      if(this.perfil_perro.vivienda === 'Casa'){
        tags.push('c')
      }
      else if(this.perfil_perro.vivienda === 'Departamento'){
        tags.push('d')
      }
      else{
        tags.push('c')
        tags.push('d')
      }
      if(this.perfil_perro.edad ===  "0"){
        edad = 'cachorro'
        tags.push('c')
      }
      else if(this.perfil_perro.edad ===  "1"){
        edad = 'joven'
        tags.push('jv')
      }
      else if(this.perfil_perro.edad ===  "2"){
        edad = 'adulto'
        tags.push('adt')
      }
      else if(this.perfil_perro.edad ===  "3"){
        edad = 'maduro'
        tags.push('md')
      }
      else if(this.perfil_perro.edad ===  "4"){
        edad = 'mayor'
        tags.push('my')
      }
      else if(this.perfil_perro.edad ===  "5"){
        edad = 'geriatrico'
        tags.push('gr')
      }
      Vue.axios.get('http://localhost:3000/imagen/').then((response) => {
        numero_imagen = response.data[0].contador
        Vue.axios.post('http://localhost:3000/perfil', {
          nombre: this.perfil_perro.nombre,
          descripcion: this.perfil_perro.descripcion,
          vivienda: this.perfil_perro.vivienda,
          sexo: this.perfil_perro.sexo,
          edad: edad,
          tags: tags,
          estado: true,
          foto: "https://placedog.net/"+numero_imagen+"/280/503"
        }).then(function(response){
          console.log('Perrito guardado')
          Vue.axios.put('http://localhost:3000/imagen/'+1, {
            contador: numero_imagen+1
          }).then(function(response){
            console.log(response)
          }).catch(function(error){
            console.log(error)
          })
        }).catch(function(error){
          console.log('Perrito no guardado')
        })
      }).catch(e => {
        this.errors.push(e)
      })
    }
  }
}

</script>

<style type="text/css">
  .input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .input[type=submit]:hover {
    background-color: #45a049;
  }

  .div {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
  .imgk {
    display: block;
  margin-left: auto;
  margin-right: auto;
    width: 15%;
    height: auto;
    align-items: center;
  }
  .img3 {
    display: block;
  margin-left: auto;
  margin-right: auto;
    width: 30%;
    height: auto;
    align-items: center;
  }
  .img2 {
  display: block;
   margin-left: auto;
   margin-right: auto;
    width: 100%;
    height: auto;
    align-items: center;
  }
</style>
