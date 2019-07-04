<template>

  <div class="container-fluid">
    <h1>Basic Grid Structure</h1>
    <p>Resize the browser window to see the effect.</p>
    <p>The first, second and third row will automatically stack on top of each other when the screen is less than 576px wide.</p>

    <div class="container-fluid">
      <!-- Control the column width, and how they should appear on different devices -->
      <div class="row">
        <div class="col-sm-6" style="background-color:#FFF7E9;"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        <div class="col-sm-6" style="background-color:#F7F2C2 ;"><form>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Ingresa tu mensaje de presentación</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <a href="#"  class="btn btn-primary  get-started-btn mt-1 mb-1">Registrarse</a>
  </div>
</form></div>
      </div>
      <br>
    </div>
    <div v-for="elemento in info">
      {{ elemento.id }}
    </div>
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
         info: null
       }
     },
     mounted () {
       Vue.axios.get('http://localhost:3000/adopcion').then((response) => {
         console.log(response.data)
         this.info = response.data;
       })


     }


 }



</script>

<style type="text/css">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;



  }


</style>
