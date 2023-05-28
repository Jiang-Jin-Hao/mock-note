<template>
  <div id="app">

    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div>
      <img :src="img">
    </div>

  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'

import axios from 'axios'

export default {
  name: 'App',
  data: function () {
    return {
      img: ""
    }
  },
  mounted: function () {
    axios.get("/product/search").then(res => {
      console.log(res)
      this.img = res.data.data.img
    })
  },
  components: {

    // HelloWorld

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
</style>
