<template>
  <div class="menu">
    <button class="menu-button" @click="enableLightMode">
      <i class="bi bi-brightness-high-fill"></i>
    </button>
    <button class="menu-button" @click="enableDarkMode">
      <i class="bi bi-moon-stars-fill"></i>
    </button>
    <button class="menu-button" @click="deleteEverything">
      <i class="bi bi-trash"></i>
    </button>
    <button class="menu-button" @click="downloadOrthographyChecker">
      <i class="bi bi-check2-all"></i>
    </button>
    <button class="menu-button" @click="aboutWindow">
      <i class="bi bi-info-circle"></i>
    </button>
    <button class="menu-button" @click="helpWindow">
      <i class="bi bi-question-circle"></i>
    </button>
    <!--<button @click="unlock">
      <i class="bi bi-pencil"></i>
    </button>
    <button @click="lock">
      <i class="bi bi-file-lock"></i>
    </button>-->
  </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    downloadOrthographyChecker() {
      window.open('https://languagetool.org/pt-BR');
    },

    aboutWindow() {
      window.alert('ProjectKeystone. Desenvolvido por @Redwars22 usando Vue.js.');
    },

    helpWindow() {
      window.open();
    },

    notImplemented() {
      window.alert('FEATURE NOT YET IMPLEMENTED!');
    },

    deleteEverything() {
      if (confirm('Tem certeza de que deseja deletar TUDO? É IRREVERSÍVEL!')) {
        localStorage.removeItem('text-data');
        location.reload(true);
      }
    },

    enableLightMode() {
      if (localStorage.getItem('light-theme') == 'false') {
        localStorage.setItem('light-theme', 'true');
        location.reload(true);
        //window.alert('Recarregue a aplicação para aplicar o modo claro!');
      }
    },

    enableDarkMode() {
      if (localStorage.getItem('light-theme') == 'true') {
        localStorage.setItem('light-theme', 'false');
        location.reload(true);
        //window.alert('Recarregue a aplicação para aplicar o modo escuro!');
      }
    },

    doubleCheckBeforeDeleting() {
      let userChoice = confirm(
        'Tem certeza de que deseja deletar TUDO? É IRREVERSÍVEL!'
      );
      return userChoice;
    },
  },
};
</script>

<style>
.menu-button {
  border: none;
  background-color: rgba(0, 0, 0, 0%);
}
.menu {
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: space-around;
}

@media (max-width: 600px) {
  .menu {
    flex-direction: row;
    gap: 5px;
  }
}
</style>
