<template>
  <aside class="filter-container">
    <div class="title-container">
      <label class="filter-title">Busca tu mascota</label>
    </div>
    <div class="subtitle-container">
      <label class="filter-subtitle">Vivienda</label>
    </div>
    <div class="filter-name">
      <label class="checkbox">Departamento
        <input type="checkbox" checked="" v-model="filtres.depa">
        <!--<input type="checkbox" checked="" @click="change()" :value="values[0]" v-model="tags">-->
        <span class="check"></span>
      </label>
    </div>
    <div class="filter-name">
      <label class="checkbox">Casa
        <input type="checkbox" checked="" v-model="filtres.casa">
        <!--<input type="checkbox" checked="" :value="values[1]" v-model="tags">-->
        <span class="check"></span>
      </label>
    </div>
    <div class="subtitle-container">
      <label class="filter-subtitle">Sexo</label>
    </div>
    <div class="filter-name">
      <label class="checkbox">Hembra
        <input type="checkbox" checked="" v-model="filtres.hm">
        <!--<input type="checkbox" checked="" value="h" v-model="tags">-->
        <span class="check"></span>
      </label>
    </div>
    <div class="filter-name">
      <label class="checkbox">Macho
        <input type="checkbox" checked="" v-model="filtres.mch">
        <!--<input type="checkbox" checked="" value="m" v-model="tags">-->
        <span class="check"></span>
      </label>
    </div>
    <div class="subtitle-container">
      <label class="filter-subtitle">Edad</label>
    </div>
    <div class="filter-name">
      <label class="checkbox">Cachorro: 0 ~ 0.5 años
        <input type="checkbox" checked="" v-model="filtres.cachorro">
        <!--<input type="checkbox" checked="" value="cch" v-model="tags">-->
        <span class="check"></span>
      </label>
    </div>
    <div class="filter-name">
      <label class="checkbox">Joven: 0.5 ~ 0.75 años
        <input type="checkbox" checked="" v-model="filtres.joven">
        <!--<input type="checkbox" checked="" value="jv" v-model="tags">-->
        <span class="check"></span>
      </label>
    </div>
    <div class="filter-name">
      <label class="checkbox">Adulto: 0.75 ~ 6.5 años
        <input type="checkbox" checked="" v-model="filtres.adulto">
        <!--<input type="checkbox" checked="" value="adt" v-model="tags">-->
        <span class="check"></span>
      </label>
    </div>
    <div class="filter-name">
      <label class="checkbox">Maduro: 6.5 ~ 9.75 años
        <input type="checkbox" checked="" v-model="filtres.maduro">
        <!--<input type="checkbox" checked="" value="md" v-model="tags">-->
        <span class="check"></span>
      </label>
    </div>
    <div class="filter-name">
      <label class="checkbox">Mayor: 9.75 ~ 13 años
        <input type="checkbox" checked="" v-model="filtres.mayor">
        <!--<input type="checkbox" checked="" value="my" v-model="tags">-->
        <span class="check"></span>
      </label>
    </div>
    <div class="filter-name">
      <label class="checkbox">Geriátrico: más de 13 años
        <input type="checkbox" checked="" v-model="filtres.gtro">
        <!--<input type="checkbox" checked="" value="gr" v-model="tags">-->
        <span class="check"></span>
      </label>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'filtros',
  props: ['filtres'],
  /*props: {
    filtres: Array
  },*/
}
</script>

<style scoped>
aside{
  position: relative;
  float: left;
}
.filter-container {
  display: flex;
  flex-direction: column;
  background-color: #F8DAA6;
  border-radius: 10px;
  width: 250px;
  height: 460px;
  margin-top: 20px;
}
.filter-name {
  background-color: #F7F2C2;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 6px;
  height: 22px;
}
.subtitle-container {
  display: flex;
  align-items: center;
  margin-top: 5px;
  background-color: #FC8945;
  border-radius: 10px;
  height: 30px;
}
.title-container {
  display: flex;
  align-items: center;
  background-color: #FC8945;
  border-radius: 10px;
  height: 50px;
}
.filter-title {
  margin: auto;
  font-family: Segoe UI;
  font-size: 30px;
  color: white;
}
.filter-subtitle {
  margin-left: 10px;
  font-family: Segoe UI;
  font-size: 17px;
  color: white;
}
/* custom checkbox */
.checkbox {
    margin-top: 2px;
    margin-left: 5px;
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 15px;
    font-family: Segoe UI;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* hide the browser's default checkbox */
.checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

/* create custom checkbox */
.check {
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: rgb(233, 233, 233);
    border: 1px solid rgb(77, 76, 76);
}

/* create the checkmark and hide when not checked */
.check:after {
    content: "";
    position: absolute;
    display: none;
}

/* show the checkmark when checked */
.checkbox input:checked ~ .check:after {
    display: block;
}

/* checkmark style */
.checkbox .check:after {
    left: 9px;
    top: -3px;
    width: 5px;
    height: 15px;
    border: solid #FC8945;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>
