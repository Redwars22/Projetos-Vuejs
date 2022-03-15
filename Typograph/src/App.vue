<template>
  <div id="app">
    <AppHeader />
    <main>
      <LeftMenu />
      <TextArea />
      <RightMenu />
    </main>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppHeader from './components/AppHeader.vue';
import TextArea from './components/TextArea.vue';
import LeftMenu from './components/LeftMenu.vue';
import RightMenu from './components/RightMenu.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppHeader,
    TextArea,
    LeftMenu,
    RightMenu,
  },
};
</script>

<style>
#app {
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;
  min-height: 95vh;
}

main {
  background-color: #424242;
  height: 90vh;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 2px solid #383838;
  display: grid;
  place-items: center;
  grid-template-columns: 3% 71% 26%;
}
</style>
