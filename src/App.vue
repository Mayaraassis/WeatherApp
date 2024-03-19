<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: linear-gradient(
    to bottom,
    #051937,
    #102e55,
    #1b4473,
    #305b81,
    #3b7caf
  );
  margin: 0;
  min-height: 100vh;
}
</style>
