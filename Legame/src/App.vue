<template>
  <div id="app">
    <Header />
    <div class="main-area">
      <fieldset class="button-editor">
        <legend>
          <i class="bi bi-pencil"></i>
          {Editor de Botão}
        </legend>
        <button
          id="editable-button"
          class="btn btn-primary editable-button"
          contenteditable
        >
          NOME DO BOTÃO
        </button>
        <div class="text-block">
          <p>
            <h1 style="font-size: 18px; font-weight: bold">
              <i class="bi bi-exclamation-triangle-fill"></i>
              INSTRUÇÕES
            </h1>
          </p>
        </div>
      </fieldset>
      <PropertiesBar />
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import PropertiesBar from './components/PropertiesBar/PropertiesBar.vue';

export default {
  name: 'App',
  components: {
    Header,
    PropertiesBar,
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
  border: 2px solid gray;
  border-radius: 10px;
  background-color: #300e1c;
  height: 97vh;
}

.button-editor {
  min-height: 80vh;
  max-height: 80vh;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#editable-button {
  margin: auto;
}

.main-area {
  display: flex;
  width: 97vw;
  min-width: 97vw;
  max-width: 97vw;
  justify-content: space-between;
  padding: 15px;
}

.text-block {
  width: 100%;
  text-align: left;
  color: orange;
}
</style>
