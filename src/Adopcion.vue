<template>
  <body class="row adopcion-container">
    <!--<div class="header">
      <h1>{{ title }}</h1>
    </div> -->
    <div class="doc">
      <div class="box">
        <img src="./assets/portada.png">
      </div>
    </div>
    <div class="col-sm-4">
      <!--<filtros :tags.sync="tags" :values.sync="values"></filtros>-->
      <filtros v-bind:filtres="filtros"></filtros>
    </div>
    <div class="col-sm-8">
      <div class="row">
        <div class="col-md-4" v-for="(perro, index) in filtrarDogs" :key="index">
          <div id="dog-container">
            <button style = "background-color:green;"v-if="perro.estado === true" class="dog" id="dog-name" @click="goTo(perro.id)">
              <label class="dog">Disponible</label>
            </button>
            <button  style = "background-color:red;"v-else class="dog-name" id="dog-name" @click="goTo(perro.id)">
              <label class="dog-name">No disponible</label>
            </button>
            <img class="dog-image" id="dog-image" v-bind:src="perro.foto">
            <div class="dog-prev" id="dog-prev">
              <label class="dog-filtro">{{ perro.vivienda }}</label>
              <label class="dog-filtro">{{ perro.sexo }}</label>
              <label class="dog-filtro">{{ perro.edad }}</label>
            </div><!--
            <div id="dog-name" @click="goTo(perro.id)">
                <label class="name">{{ perro.nombre }}</label>
            </div>-->

            <button class="dog-name" id="dog-name" @click="goTo(perro.id)">
              <label class="dog-name">{{ perro.nombre }}</label>
            </button>

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
        this.perros = response.data
    })
  },
  methods: {
      goTo(dog_id) {
        this.$router.push({ name: 'perfil', params: { id: dog_id } })
      }
  },
  computed: {
      filtrarDogs: function(){
        var filtrarDogs = []
        if(this.filtros.depa === false && this.filtros.casa === false && this.filtros.mch === false && this.filtros.hm === false && this.filtros.cachorro === false && this.filtros.joven === false && this.filtros.mayor === false && this.filtros.maduro === false && this.filtros.adulto === false && this.filtros.gtro === false){
          return this.perros
        }
        else if(this.filtros.depa === false && this.filtros.casa === false && this.filtros.mch === true && this.filtros.hm === true && this.filtros.cachorro === false && this.filtros.joven === false && this.filtros.mayor === false && this.filtros.maduro === false && this.filtros.adulto === false && this.filtros.gtro === false){
          return this.perros
        }
        else if(this.filtros.cachorro === true && this.filtros.joven === true && this.filtros.mayor === true && this.filtros.maduro === true && this.filtros.adulto === true && this.filtros.gtro === true){
          return this.perros
        }
        else {
          var tagV = []
          var tagS = []
          var tagE = []
          if(this.filtros.depa === true){
            tagV.push('d')
          }
          if(this.filtros.casa === true){
            tagV.push('c')
          }
          if(this.filtros.mch === true){
            tagS.push('m')
          }
          if(this.filtros.hm === true){
            tagS.push('h')
          }
          if(this.filtros.cachorro === true){
            tagE.push('cch')
          }
          if(this.filtros.joven === true){
            tagE.push('jv')
          }
          if(this.filtros.adulto === true){
            tagE.push('adt')
          }
          if(this.filtros.maduro === true){
            tagE.push('md')
          }
          if(this.filtros.mayor === true){
            tagE.push('my')
          }
          if(this.filtros.gtro === true){
            tagE.push('gr')
          }
          this.perros.forEach(function(perro){
            /*function dogsContainsFilter(filter){
              return perro.tags.indexOf(filter) != -1;
            }
            if(tags.every(dogsContainsFilter)){
              filtrarDogs.push(perro)
            }*/
            if(tagV.length > 0 && tagS.length == 0 && tagE.length == 0){
              tagV.forEach(function(tag){
                if(perro.tags.indexOf(tag) != -1){
                  filtrarDogs.push(perro)
                }
              })
            }
            else if(tagV.length == 0 && tagS.length > 0 && tagE.length == 0){
              tagS.forEach(function(tag){
                if(perro.tags.indexOf(tag) != -1){
                  filtrarDogs.push(perro)
                }
              })
            }
            else if(tagV.length == 0 && tagS.length == 0 && tagE.length > 0){
              tagE.forEach(function(tag){
                if(perro.tags.indexOf(tag) != -1){
                  filtrarDogs.push(perro)
                }
              })
            }
            else if(tagV.length > 0 && tagS.length > 0 && tagE.length == 0){
              tagV.forEach(function(tag){
                if(perro.tags.indexOf(tag) != -1){
                  tagS.forEach(function(tag2){
                    if(perro.tags.indexOf(tag2) != -1){
                      filtrarDogs.push(perro)
                    }
                  })
                }
              })
            }
            else if(tagV.length == 0 && tagS.length > 0 && tagE.length > 0){
              tagS.forEach(function(tag){
                if(perro.tags.indexOf(tag) != -1){
                  tagE.forEach(function(tag2){
                    if(perro.tags.indexOf(tag2) != -1){
                      filtrarDogs.push(perro)
                    }
                  })
                }
              })
            }
            else if(tagV.length > 0 && tagS.length == 0 && tagE.length > 0){
              tagV.forEach(function(tag){
                if(perro.tags.indexOf(tag) != -1){
                  tagE.forEach(function(tag2){
                    if(perro.tags.indexOf(tag2) != -1){
                      filtrarDogs.push(perro)
                    }
                  })
                }
              })
            }
            else if(tagV.length > 0 && tagS.length > 0 && tagE.length > 0){
              tagV.forEach(function(tag){
                if(perro.tags.indexOf(tag) != -1){
                  tagS.forEach(function(tag2){
                    if(perro.tags.indexOf(tag2) != -1){
                      tagE.forEach(function(tag3){
                        if(perro.tags.indexOf(tag3) != -1){
                          filtrarDogs.push(perro)
                        }
                      })
                    }
                  })
                }
              })
            }
          })
          return filtrarDogs
        }
      }
  }
}
</script>
<style>
.header {
  border: 3px black solid;
  grid-column-start: 1;
  grid-column-end: 13;
  height: 200px;
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
}
#dog-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #F8DAA6;
  border: 1px black solid;
  border-radius: 10px;
  margin-top: 20px;
  height: 210px;
  width: 210px;
}
#dog-container:hover .dog-image{
  opacity: 0.3;
}
#dog-container:hover .dog-prev{
  opacity: 1;
}
#dog-container:hover .masname{
  opacity: 1;
}
#dog-name {
  display: flex;
  align-self: baseline;
  background-color: #FC8945;
  border: none;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  margin-top: 9px;
}

#dog-image {
  backface-visibility: hidden;
  transition: .5s ease;
  border-radius: 10px;
  width: 100%;
  opacity: 1;
}
#dog-prev {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  text-align: center;
  width: 100%;


  opacity: 0;
}
.dog-filtro{
  font-family: Segoe UI;
  font-size: 17px;
}
.name {
  font-family: Segoe UI;
  font-size: 20px;
  color: white;
  margin: auto;
}
.masname {
  font-family: Segoe UI;
  font-size: 20px;
  color: white;
  margin: auto;
  opacity: 0;
}
.doc{
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.box{
  overflow: hidden;
  width: 100%;
}
.box img{
  width: 100%;
  height: auto;
}
.label {
  color: white;
  padding: 8px;
  font-family: Arial;
}
.success {background-color: #4CAF50;} /* Green */
.info {background-color: #2196F3;} /* Blue */
.warning {background-color: #ff9800;} /* Orange */
.danger {background-color: #f44336;} /* Red */
.other {background-color: #e7e7e7; color: black;} /* Gray */
</style>
