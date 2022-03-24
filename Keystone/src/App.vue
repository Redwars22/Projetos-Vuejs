<template>
  <div id="app">
    <LeftBar />
    <div class="right-bar">
      <TextEditor />
      <NotesView />
    </div>
  </div>
</template>

<script>
import TextEditor from './components/main/TextEditor.vue';
import NotesView from './components/main/NotesView.vue';
import LeftBar from './components/leftbar/LeftBar.vue';

export default {
  name: 'App',
  components: {
    TextEditor,
    NotesView,
    LeftBar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Patrick Hand', cursive;
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
  color: #d70342;
  font-size: 30px;
}

.right-bar {
  background-color: #070011;
  width: 93vw;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 600px) {
  #app {
    flex-direction: column;
  }

  .right-bar {
    width: 100%;
    height: 90vh;
  }

  .bi {
    font-size: 23px;
  }
}
</style>
