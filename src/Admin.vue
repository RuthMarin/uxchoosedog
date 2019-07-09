<template>
  <div class="container" >
    <div class="box">
      <img class= "img2" src="./assets/portada.png">
    </div>
    <div class="row"  >
    <div class="col-xs-6 col-md-4" style="background-color:#AA3939;margin-top: 20px; margin-bottom: 20px; align-items:center"><div class="card"  v-for="item in info" style="width: 100%;margin-top: 10 px; ">
  <div class="card-body">
    <h5 class="card-title">Solicitud de adopción</h5>
    <p class="card-text">{{ item.texto }}</p>
    <button class="btn btn-success" v-model="statementIsFalse" @click="postPost(item.id_perro)">Cambiar </button>

  </div>
</div></div>
    <div class="col-xs-12 col-md-8" style="background-color:#F7F2C2 ; margin-top: 20px; margin-bottom: 20px; " >
      <h3>Formulario para dar en adopción</h3><img class= "imgk" src="./assets/perro.png">

<div>
  <form action="/action_page.php">
 <div class="form-group">
   <label >Nombre:</label>
   <input  class="form-control" id="email">
 </div>
 <div class="form-group">
   <label >Descripción:</label>
   <input  class="form-control" id="email">
 </div>

 <div class="form-group">
   <label >Tipo de Vivienda:</label>
   <select name="movie" id="movie" v-model="movie">
     <option>Star Wars</option>
     <option>Vanilla Sky</option>
     <option>Atomic Blonde</option>
   </select>
 </div>
 <div class="form-group">
   <label >Sexo:</label>
   <select name="movie" id="movie" v-model="movie">
     <option>Star Wars</option>
     <option>Vanilla Sky</option>
     <option>Atomic Blonde</option>
   </select>
 </div>
 <div class="form-group">
   <label >Edad:</label>
   <select name="movie" id="movie" v-model="movie">
     <option>Star Wars</option>
     <option>Vanilla Sky</option>
     <option>Atomic Blonde</option>
   </select>
 </div>


 <button type="submit" class="btn btn-default">Submit</button>
</form>
</div>

    </div>
  </div>
<br>

    <div>State: <strong>{{ datos }}</strong></div>


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
         status: '',
         statementIsFalse: false,
         datos: '',
         numero: ''
       }
     },
     created () {
       Vue.axios.get('http://localhost:3000/adopcion/').then((response) => {
         console.log(response.data)
         this.info = response.data;
       })
     },
     computed: {
       solicitudes: function(){
         console.log(this.datos)
         var solicitudes=[];
         this.info.forEach(function(inf){

         })
        if(this.info.estado === false){
          return this.id;

        }
       }
     },
      methods: {
     postPost(elemento) {
       this.numero = elemento;
       Vue.axios.get('http://localhost:3000/perfil/'+this.numero).then((response) => {
         console.log(response.data)
         this.datos = response.data;
         this.datos.estado = !this.datos.estado;
         axios.put('http://localhost:3000/perfil/'+this.numero, this.datos)
    .then(response => {})
    .catch(e => {
      this.errors.push(e)
    })

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
  .img2 {
  display: block;
   margin-left: auto;
   margin-right: auto;
    width: 100%;
    height: auto;
    align-items: center;
  }
</style>
