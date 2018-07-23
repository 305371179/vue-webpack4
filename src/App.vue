<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <HelloWorld1/>
    <HelloWorld3/>
    <aa></aa>
  </div>
</template>

<script>
import HelloWorld1 from './components/HelloWorld'
import {HelloWorld ,HelloWorld3}from './components/index'
let aa = () => import('./components/HelloWorld1')
export default {
  name: 'App',
  components: {
    HelloWorld,HelloWorld1,aa,HelloWorld3
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
