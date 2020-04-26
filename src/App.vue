<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <Hello msg="something" @add="doSomething"></Hello> -->
    <Decor msg="lala"></Decor>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from './components/HelloWorld.vue'
// eslint-disable-next-line no-unused-vars
import Hello, { Feature } from './components/Hello.vue'
import Decor from './components/Decor.vue'

@Component({
  components: {
    HelloWorld,
    Hello,
    Decor
  }
})
export default class App extends Vue {
  private doSomething (feature:Feature) {
    alert(feature.name)
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
