<template>

  <div id="app">
   <Tab></Tab>
    <router-view/>
  </div>
</template>

<script>
  import Tab from './base/Tab'
export default {
  name: 'App',
  components:{
    Tab
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
