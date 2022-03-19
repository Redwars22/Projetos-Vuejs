<template>
  <div id="app">
    <div class="left-bar">
      <img
        src="https://raw.githubusercontent.com/Redwars22/Projetos-Vuejs/main/resx/keystone.png"
        width="50px"
      />
      <div class="menu">
        <i class="bi bi-gear"></i>
        <i class="bi bi-info-circle"></i>
        <i class="bi bi-help"></i>
        <i class="bi bi-question-circle"></i>
        <i class="bi bi-trash"></i>
        <i class="bi bi-pencil"></i>
        <i class="bi bi-file-lock"></i>
      </div>
      <p>Versão x.x.x ALPHA</p>
    </div>
    <div class="right-bar"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  padding: 0;
  display: flex;
  max-height: 100vh;
  min-height: 100vh;
  max-width: 100vw;
}

.bi {
  color: white;
  font-size: 30px;
}

.left-bar {
  background-color: #0a0909;
  border-right: 3px dashed #7b032e;
  width: 7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-evenly;
}

.right-bar {
  background-color: #070011;
  width: 93vw;
}
</style>
