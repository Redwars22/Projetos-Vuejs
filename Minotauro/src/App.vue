<template>
  <div id="app">
    <Header />
    <main>
      <Section title="Recomendados" source="https://github.com/Redwars22.png" />
      <hr />
      <Section title="Populares" />
      <hr />
      <Section title="Vídeos Novos no Minotauro" />
      <hr />
    </main>
    <VideoButtons />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Section from './components/Section.vue';
import VideoButtons from './components/VideoButtons.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Section,
    VideoButtons,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(255, 255, 255);
  margin: 0px;
  background: linear-gradient(
    193deg,
    rgba(255, 255, 255, 1) 1%,
    rgba(228, 228, 228, 0.9262079831932774) 49%,
    rgba(204, 0, 0, 0.06626400560224088) 100%
  );
}

hr {
  opacity: 0.1;
  border: 0.5px dashed #cc0000;
}

main {
  max-height: 74vh;
  overflow: auto;
  margin-bottom: 8px;
}

@media (min-width: 800px) {
  #app {
    padding: 8px;
    height: 98.5vh;
  }

  main {
    max-height: 74vh;
    padding-left: 120px;
    padding-right: 120px;
  }
}
</style>
