<template>
  <body class="row adopcion-container">
    <!--<div class="header">
      <h1>{{ title }}</h1>
    </div> -->
    <div class="col-sm-4">
      <filtros class="" v-bind:filtres="filtros"></filtros>
    </div>
    <div class="col-sm-8">
      <div class="row">
        <div class="col-md-4" v-for="(perro, index) in perros" :key="index">
            <div class="dog-container">
            <div id="dog-image-container">  </div>
            <div id="dog-name" @click="goTo(perro.id)">
                <label class="name">{{ perro.nombre }}</label>
            </div>
            </div>
        </div> 
      </div>
    </div>
  </body>
</template>
<!--<img id="dog-image" :src="require(`@/assets/dogs/01.jpg`)">-->
<script>
import filtros from './components/filtros.vue'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

export default {
  name: 'Adopcion',
  components: {
    'filtros': filtros
  },
  data () {
    return {
      title: 'Adopta una mascota',
      perros: [],
      filtros: {
        depa: false,
        casa: false,
        hm: false,
        mch: false,
        cachorro: false,
        joven: false,
        adulto: false,
        maduro: false,
        mayor: false,
        gtro: false
      }
    }
  },
  created () {
    Vue.axios.get('http://localhost:3000/perfil').then((response) => {
        console.log(response.data)
        this.perros = response.data.slice(0,6);
    })
  },
  methods: {
      goTo(dog_id) {
          this.$router.push({ name: 'perfil', params: { id: dog_id } })
      }
  }
}
</script>
<style>
.header {
  border: 3px black solid;
  grid-column-start: 1;
  grid-column-end: 13;
  height: 150px;
}
.select-perro {
  border: 1px black solid;
  margin-top: 20px;
  height: 470px;
}
.adopcion-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-left: 140px;
  margin-right: 140px;
  margin-bottom: 10px;    
/*
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 0px;*/
}
.dog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end;
  background-color: #F8DAA6;
  border: 1px black solid;
  border-radius: 10px;
  margin-top: 20px;
  height: 210px;
  width: 200px;
}
#dog-name {
  display: flex;
  background-color: #FC8945;
  border-radius: 10px;
  height: 40px;
  width: 100%;
}
#dog-image {
  border-radius: 10px;
  width: 100%;
}
.name {
  font-family: Segoe UI;
  font-size: 20px;
  color: white;
  margin: auto;
}
</style>
