<template>
  <div>

    <div class="container-fluid">

      <div class="doc">
        <div class="box">
          <img src="./assets/portada.png">
        </div>
      </div>

      <div class="container-fluid">
        <img class="img" src="./assets/dog2.png">
    <h2 style = "	font-size: 20px;  ">
    <a class="btn btn-large btn-green" href="#">ADOPTA</a>
    <a class="btn btn-large btn-blue" href="#">DAR EN ADOPCIÓN</a>


    </h2>

            <p>Somos un grupo de voluntarios que rescatamos animales en total abandono o maltrato, los rehabilitamos, los esterilizamos , sanamos y volvemos a pegar sus corazones rotos, por tanta maldad, y les buscamos las mejores familias para ellos.

            Somos un Fundación sin fines de lucro, nuestro fuerza nos la dan ellos al verlos con una familia de verdad.</p>
            </div><br>




<div class="container-fluid">
<!-- Control the column width, and how they should appear on different devices -->

<div class="row">

  <div class="col" style="background-image: linear-gradient(#ff9d2f, #ff6126);  color: #fff;   ">  <h1>¿Qué es la tenencia responsable?</h1><img class="img3" src="./assets/dod.png"><p>

Es el conjunto de obligaciones que contrae una persona cuando decide aceptar y mantener una mascota o animal de compañía. Debe registrarlo ante la autoridad competente cuando corresponda, proporcionarle alimento, albergue y buen trato, brindarle los cuidados veterinarios indispensables para su bienestar y no someterlo a sufrimientos a lo largo de su vida.

La tenencia responsable implica también la obligación de adoptar todas las medidas necesarias para evitar que la mascota o animal de compañía cause daños a las personas o a la propiedad de otros.

El propietario también es responsable de su alimentación, manejo sanitario, especialmente de la recolección y eliminación de sus fecas, y del cumplimiento de toda otra obligación dispuesta en la ley y sus normas complementarias.</p></div>
</div>
</div>
<br>
</div>



    </div>


</template>

<script>

</script>

<style type="text/css">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 60px;


}

.img {
  width: 45%;
  height: auto;
 align-items: center;
}
.img3 {
  width: 25%;
  height: auto;
 align-items: center;
 display: block;
  margin-left: auto;
  margin-right: auto;

}

.p{
  margin-bottom: 10em;
  margin-right: 10em;
  margin-left: 10em;
  text-align: justify;
}


h1, h2 {
  font-weight: normal;
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

.diagonal {
	background-color: #F3F2E2 ;
	transform: skewX(30deg);

	/* Zentriert den Inhalt */
	display: flex;
	align-items: center;
}

*{margin: 0; padding: 0;}
.doc{
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

}
.box{
  overflow: hidden;
}

.box img{
  width: 100%;
  height: auto;
}
@supports(object-fit: cover){
    .box img{
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
}

@import url(https://fonts.googleapis.com/css?family=Raleway);

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.wrap {
  width: 100%;
  max-width: 900px;
  margin: auto;
  font-family: Raleway, Arial, sans-serif;
  padding: 1em 2em;
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid #eee;
    margin: 2em 0;
    padding: 0;
}

h1, h2 {
  border-bottom: 2px solid #eee;
  line-height: 1.5;
}

h1 > small{
  color: #666;
}

h1 > small > a,
p > a{
  color: #3CB371;
  text-decoration: none;
}
h1 > small > a:hover,
p > a:hover{
  text-decoration: underline;
}

/* Buttons styles */
input::-moz-focus-inner,
button::-moz-focus-inner {
	border: 0;
	padding: 0;
}

input[type="submit"].btn,
button.btn {
	cursor: pointer;
}

a.btn,.btn {
  margin-right: 1em; /* remove this while use*/
  margin-bottom: 1em; /* remove this while use*/
	display: inline-block;
	outline: none;
	*zoom: 1;
	text-align: center;
	text-decoration: none;
	font-family: inherit;
	font-weight: 300;
	letter-spacing: 1px;
	vertical-align: middle;
	border: 1px solid;
	transition: all 0.2s ease;
	box-sizing: border-box;
	text-shadow: 0 1px 0 rgba(0,0,0,0.01);
}
/* Radius */

.btn-large {
	font-size: 1.0625em;
	padding: 0.5625em 1.5em;
}

/* Colors */
.btn-green{
  background: #3CB371;
  color: #fff;
  border-color: #3CB371;
}
.btn-green:hover {
  background:  #fff;
  color: #3CB371;
  border-color: #3CB371;
}

.btn-blue {
  background: #4682B4;
  color: #fff;
  border-color: #3CB371;
}
.btn-blue:hover {
  background: #fff;
  color: #2C4870;
    border-color: #4682B4;
}


</style>
