<template>
  <div id="app">
    <Header />
    <Core />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';
import Core from './components/Core/Core.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Core,
  },
};
</script>

<style>
body {
  background: rgb(91, 25, 7);
  background: linear-gradient(
    328deg,
    rgba(91, 25, 7, 1) 0%,
    rgba(249, 1, 75, 1) 100%
  );
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 15px 15px;
  color: #ffffff;
}
</style>
