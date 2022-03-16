<template>
  <div class="menu">
    <button class="first-btn menu-button" @click="saveData">
      <i class="bi bi-save"></i>
    </button>
    <button class="menu-button" @click="retrieveData">
      <i class="bi bi-folder2-open"></i>
    </button>
    <button class="menu-button" @click="deleteData">
      <i class="bi bi-trash"></i>
    </button>
    <button class="menu-button" @click="alignLeft">
      <i class="bi bi-text-left"></i>
    </button>
    <button class="menu-button" @click="alignCenter">
      <i class="bi bi-text-center"></i>
    </button>
    <button class="menu-button" @click="alignRight">
      <i class="bi bi-text-right"></i>
    </button>
    <!--<button class="menu-button"><i class="bi bi-fonts"></i></button>-->
    <button class="menu-button" @click="boldText">
      <i class="bi bi-type-bold"></i>
    </button>
    <button class="menu-button" @click="italicText">
      <i class="bi bi-type-italic"></i>
    </button>
    <button class="menu-button" @click="underlineText">
      <i class="bi bi-type-underline"></i>
    </button>
    <button class="menu-button" @click="aboutThisApp">
      <i class="bi bi-info-square"></i>
    </button>
    <button class="menu-button" @click="showHelp">
      <i class="bi bi-question-circle"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  methods: {
    saveData() {
      let textEditor = document.getElementById('text-editor');
      localStorage.setItem('app-data', textEditor.innerText);
    },

    retrieveData() {
      let textEditor = document.getElementById('text-editor');
      let toOpenAndReplace = true;

      if (textEditor.innerText != '') {
        toOpenAndReplace = window.confirm(
          'Deseja abrir o texto salvo e substituir o que está na caixa de texto?'
        );
      }

      if (toOpenAndReplace) {
        let text = localStorage.getItem('app-data');
        textEditor.innerText = text;
      }
    },

    deleteData() {
      let toDeleteOrNot = window.confirm(
        'Certeza de que deseja deletar? O PROCESSO É IRREVERSÍVEL!!!'
      );
      if (toDeleteOrNot) {
        localStorage.removeItem('app-data');
        let textEditor = document.getElementById('text-editor');
        textEditor.innerText = '';
      }
    },

    /*Alinhamento do texto*/
    alignLeft() {
      let textEditor = document.getElementById('text-editor');
      textEditor.style['text-align'] = 'left';
    },

    alignCenter() {
      let textEditor = document.getElementById('text-editor');
      textEditor.style['text-align'] = 'center';
    },

    alignRight() {
      let textEditor = document.getElementById('text-editor');
      textEditor.style['text-align'] = 'right';
    },

    /*Formatação do texto*/
    boldText() {
      let textEditor = document.getElementById('text-editor');
      if (textEditor.style['font-weight'] != 'bold') {
        textEditor.style['font-weight'] = 'bold';
      } else {
        textEditor.style['font-weight'] = '';
      }
    },

    underlineText() {
      let textEditor = document.getElementById('text-editor');
      if (textEditor.style['text-decoration'] != 'underline') {
        textEditor.style['text-decoration'] = 'underline';
      } else {
        textEditor.style['text-decoration'] = '';
      }
    },

    italicText() {
      let textEditor = document.getElementById('text-editor');
      if (textEditor.style['font-style'] != 'italic') {
        textEditor.style['font-style'] = 'italic';
      } else {
        textEditor.style['font-style'] = '';
      }
    },

    /*Sobre, ajuda etc...*/
    aboutThisApp() {
      window.alert(
        'ProjectTypograph. Desenvolvido por André Pereira (GitHub: @Redwars22) em Vue.js.'
      );
    },

    showHelp() {
      window.open(
        'https://redwars22.notion.site/Ajuda-do-Project-Typograph-c23c61d339934b29a1c13eefa3dc49e7'
      );
    },
  },
};
</script>

<style scoped>
.menu {
  height: 100%;
  width: 100%;
  background-color: #535353;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 10px;
}

.bi {
  font-size: 19px;
  /*color: #424242;*/
  color: grey;
}

.menu-button {
  max-width: 40px;
  border: none;
  background-color: inherit;
  margin-bottom: 7px;
}

.first-btn {
  margin-top: 10px;
}
</style>
