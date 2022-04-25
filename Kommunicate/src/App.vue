<template>
  <div id="app">
    <Header />
    <DataForm />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import DataForm from './components/Form/DataForm.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    DataForm,
    Footer,
  },
};
</script>

<style>
* {
  font-family: 'Rubik', sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  height: 100vh;
  padding: 10px;
  color: #21ba45;
}

body {
  background: rgb(7, 91, 48);
  background: linear-gradient(
    328deg,
    rgba(7, 91, 48, 0.1) 0%,
    rgba(5, 151, 48, 0.1) 38%,
    rgba(3, 189, 117, 0.1) 69%,
    rgba(1, 249, 152, 0.1) 100%
  );
}

.app-title {
  color: lightgreen;
}
</style>
