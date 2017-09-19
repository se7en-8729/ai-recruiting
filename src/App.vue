<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/Header'
export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: tahoma,arial,'Microsoft YaHei','Hiragino Sans GB','\5b8b\4f53',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin:0
}
</style>
