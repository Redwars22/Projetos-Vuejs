<template>
  <div id="app">
    <Header />
    <MainArea />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import MainArea from './components/Main/MainArea.vue';

export default {
  name: 'App',
  components: {
    Header,
    MainArea,
  },
};
</script>

<style>
* {
  font-family: 'JetBrains Mono';
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 10px;
  padding: 10px;
  padding-top: 5px;
  border: 2px solid crimson;
  border-radius: 10px;
  background-color: #5b1a35;
  height: 97vh;
}
</style>
