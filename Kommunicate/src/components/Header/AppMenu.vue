<template>
  <div class="menu-container">
    <button class="ui green basic button" @click="handleAboutBox">
      <i class="info icon"></i>
      Sobre
    </button>
    <button class="ui green basic button" @click="handleHelpBox">
      <i class="question circle icon"></i>
      Ajuda
    </button>
    <button class="ui green basic button" @click="handleOtherProjectsButton">
      <i class="plus square icon"></i>
      Outros Projetos
    </button>
  </div>
</template>

<script>
export default {
  name: 'AppMenu',
  methods: {
    handleHelpBox() {
      Swal.fire({
        icon: 'question',
        title: 'Ajuda do Kommunicate',
        text: 'Preencha os campos telefone e mensagem e clique em GERAR LINK. O link será exibido num campo logo abaixo do formulário. Selecione-o e copie o link! Caso tenha alguma dúvida ou encontre algum erro, reporte no seguinte e-mail: leoandrew@vivaldi.net.',
      });
    },

    handleAboutBox() {
      Swal.fire({
        icon: 'info',
        title: 'Sobre o Kommunicate',
        text: 'Gerador de links do WhatsApp. Desenvolvido por @Redwars22. Versão 1.0.0.',
      });
    },

    handleOtherProjectsButton() {
      window.open('https://github.com/Redwars22');
    },
  },
};
</script>

<style scoped>
.menu-container {
  display: flex;
  flex-direction: row;
}
</style>
