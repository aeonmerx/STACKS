<template>
<div id="Componentes">
 <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <MiComponente> </MiComponente>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MiComponente from './components/MiComponente.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MiComponente
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#Componentes{
  background-color: rgb(62, 202, 50);
}
</style>
