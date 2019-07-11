<template>
  <div class="container" >
    <div class="box">
      <img class= "img2" src="./assets/portada.png">
    </div>
    <br>
    <div class="container-fluid">
      <h1 style="text-align: center;">Perfiles de perros</h1>
    </div>
    <div class="row" style=" text-align: center;" >
      <div class="col-sm-4" style="background-color:#FFae68;" v-for="(it, index) in adoptado" :key="index">
        <br>
        <img class= "img3" :src="it.foto" >
          <div class="col-sm-6" style="background-color:#FFC592; text-align: center; -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;" >
            <label>{{it.nombre}}</label>
            <br>
            <button type="button" class="btn btn-success " @click="postPost(it.id)">
              Adoptado
            </button>
            <button type="button" class="btn btn-primary"  style="background-color:#EE7A17; maring-top: 10px" @click="getSolicitudes(it.id)">
              Solicitudes
            </button>
            <br>
          </div>
          <br>
      </div>
    </div>
    <br>
    <div class="row"  >
      <div class="col-xs-6 col-md-6" style="background-color:#FC8945;margin-top: 20px; margin-bottom: 20px; align-items:center">
        <h3 style="color:#F7F2C2 ; text-align: center" >Solicitudes de adopción</h3>
        <div class="card" v-for="(item, index) in solicitudes" :key="index" style="width: 100%;margin-top: 10 px; ">
          <div class="card-body">
            <h5 class="card-title">Solicitud de adopción</h5>
            <p class="card-text">{{ item.texto }}</p>
            <button class="btn btn-danger" @click="postRespuesta(item.id)">Eliminar</button>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6" style="background-color:#F7F2C2 ; margin-top: 20px; margin-bottom: 20px;">
        <h3 style=" text-align: center">Formulario para dar en adopción</h3><img class= "imgk" src="./assets/perro.png">
        <div>
          <div>
            <div>
              <label>Nombre</label>
              <input required class="form-control" id="email" v-model="perfil_perro.nombre">
              <label class="error" v-if="perfil_perro.errores.descripcion != null">{{ perfil_perro.errores.name }}</label>
            </div>
            <div>
              <label>Tipo de Vivienda</label>
              <select name="vivienda" id="vivienda" v-model="perfil_perro.vivienda">
                <option>Casa</option>
                <option>Departamento</option>
                <option>Casa y departamento</option>
              </select>
              <label class="error" v-if="perfil_perro.errores.descripcion != null">{{ perfil_perro.errores.vivienda }}</label>
            </div>
            <div>
              <label >Sexo</label>
              <select name="sexo" id="sexo" v-model="perfil_perro.sexo">
                <option>Macho</option>
                <option>Hembra</option>
              </select>
              <label class="error" v-if="perfil_perro.errores.descripcion != null">{{ perfil_perro.errores.sexo }}</label>
            </div>
            <div>
              <label >Edad</label>
              <select name="edad" id="edad" v-model="perfil_perro.edad">
                <option value="0">Cachorro: 0 ~ 0.5 años</option>
                <option value="1">Joven: 0.5 ~ 0.75 años</option>
                <option value="2">Adulto: 0.75 ~ 6.5 años</option>
                <option value="3">Maduro: 6.5 ~ 9.75 años</option>
                <option value="4">Mayor: 9.75 ~ 13 años</option>
                <option value="5">Geriatrico: mas de 13 años</option>
              </select>
              <label class="error" v-if="perfil_perro.errores.descripcion != null">{{ perfil_perro.errores.edad }}</label>
            </div>
            <div>
              <label>Añade informacion importante</label>
              <!--<input class="form-control" id="email" v-model="perfil_perro.descripcion">-->
              <textarea v-model="perfil_perro.descripcion" rows="4" cols="65"></textarea>
              <label class="error" v-if="perfil_perro.errores.descripcion != null">{{ perfil_perro.errores.descripcion }}</label>
            </div>
            <button class="btn btn-success" @click="nuevoPerro()">Agregar</button>
          </div>
        </div>
      </div>
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
      info: [],
      status: '',
      statementIsFalse: false,
      datos: '',
      numero: '',
      solicitud:'',
      aprobado:'',
      id: '',
      idp: '',
      perro:[],
      solicitudes: [],
      perfil_perro: {
        errores: {
          name: null,
          sexo: null,
          edad: null,
          vivienda: null,
          descripcion: null
        },
        nombre: null,
        descripcion: null,
        vivienda: null,
        sexo: null,
        edad: null,
      },
    }
  },
  created () {
    Vue.axios.get('http://localhost:3000/adopcion/').then((respadop) => {
      console.log(respadop.data)
      this.info = respadop.data;
    })
    Vue.axios.get('http://localhost:3000/perfil/').then((respperf) => {
      console.log(respperf.data)
      this.perro = respperf.data;
      //this.perros_solicitudes = this.joinPerfilSolicitud(this.info,this.perro)
      //console.log(this.perros_solicitudes)
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
    filtrarSolicitudes(){
      var a = this.info.filter(function(s){
        return s.respuesta
      })
      this.solicitudes = a
      console.log(this.solicitudes)
    },
    getSolicitudes(id){
      console.log(id)
      console.log(this.info)
      var solicitudes = []
      this.info.forEach(function(inf){
        if(inf.id_perro === id){
          solicitudes.push(inf)
        }
      })
      this.solicitudes = solicitudes
      console.log(solicitudes)
    },
    check(){
      if(this.perfil_perro.nombre && this.perfil_perro.descripcion && this.perfil_perro.vivienda && this.perfil_perro.sexo && this.perfil_perro.edad){
        return true
      }
      //this.perfil_perro.errores = []
      if(!this.perfil_perro.nombre){
        //this.perfil_perro.errores.push('Agrega el nombre del perrito')
        this.perfil_perro.errores.name = 'Agrega el nombre del perrito'
      }
      if(!this.perfil_perro.descripcion){
        //this.perfil_perro.errores.push('Agrega una descripcion')
        this.perfil_perro.errores.descripcion = 'Agrega una descripcion'
      }
      if(!this.perfil_perro.vivienda){
        //this.perfil_perro.errores.push('Agrega el tipo de vivienda')
        this.perfil_perro.errores.vivienda = 'Agrega el tipo de vivienda'
      }
      if(!this.perfil_perro.sexo){
        //this.perfil_perro.errores.push('Agrega el sexo del perrito')
        this.perfil_perro.errores.sexo = 'Agrega el sexo del perrito'
      }
      if(!this.perfil_perro.edad){
       // this.perfil_perro.errores.push('Agrega su edad')
        this.perfil_perro.errores.edad = 'Agrega su edad'
      }
    },
    postPost(elemento) {
      this.numero = elemento;
      Vue.axios.get('http://localhost:3000/perfil/'+this.numero).then((response) => {
        console.log(response.data)
        this.datos = response.data;
        this.datos.estado = false;
        axios.put('http://localhost:3000/perfil/'+this.numero, this.datos)
      .then(response => {
        axios.get('http://localhost:3000/perfil/').then((response)=>{
        this.perro = response.data;
      })
      })
      .catch(e => {
        this.errors.push(e)
      })
      
      })
    },
    postRespuesta(elemento) {
      Vue.axios.delete('http://localhost:3000/adopcion/'+elemento).then((response) => {
        Vue.axios.get('http://localhost:3000/adopcion/').then((respadop) => {
          console.log(respadop.data)
          this.info = respadop.data;
          //this.$router.push({ name: 'admin'})
          this.getSolicitudes(elemento)
          this.$notify({
            group: 'mensaje',
            text: 'Solicitud eliminada'
          });
        })
        .then(response => {
        })
        .catch(e => {
          this.errors.push(e)
        })
      })
      /*
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
      })*/
    },
    nuevoPerro(){
      if(this.check()){
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
          tags.push('t')
        }
        if(this.perfil_perro.edad ===  "0"){
          edad = 'cachorro'
          tags.push('cch')
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
        this.$notify({
          group: 'mensaje',
          text: 'Se ha subido un nuevo perfil'
        });
      } 
    },
    joinPerfilSolicitud(){
      var idMap = {};
      // Iterate over arguments
      for(var i = 0; i < arguments.length; i++) { 
        // Iterate over individual argument arrays (aka json1, json2)
        for(var j = 0; j < arguments[i].length; j++) {
          var currentID = arguments[i][j]['id'];
          if(!idMap[currentID]) {
              idMap[currentID] = {};
            }
          // Iterate over properties of objects in arrays (aka id, name, etc.)
          for(var key in arguments[i][j]) {
              idMap[currentID][key] = arguments[i][j][key];
          }
        }
      }
      // push properties of idMap into an array
      var newArray = [];
      for(var property in idMap) {
        newArray.push(idMap[property]);
      }
      return newArray;
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
  .col-sm-4{
    margin-left: auto;
    margin-right: auto;
      align-items: center;


  }
  .col-sm-6{
    margin-left: auto;
    margin-right: auto;
      align-items: center;
  }
  .error{
    color: red;
    align-self: right;
  }
</style>
