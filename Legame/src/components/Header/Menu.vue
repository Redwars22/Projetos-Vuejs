<template>
  <div class="menu">
    <button class="menu-button" @click="reset">
      <i class="bi bi-recycle"></i>
      Resetar
    </button>
    <button class="menu-button" @click="openHelpWindow">
      <i class="bi bi-question-square"></i>
      Como Usar
    </button>
    <button class="menu-button" @click="aboutWindow">
      <i class="bi bi-info-square"></i>
      Sobre o Legame
    </button>
    <button class="menu-button" @click="changelog">
      <i class="bi bi-tools"></i>
      Changelog
    </button>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    reset() {
      const message =
        'Tem certeza de que deseja resetar todos os valores para o padrão? Isso fará que você perca todas as alterações feitas. Deseja prosseguir?';

      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text: message,
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Resetar',
      }).then((result) => {
        if (result.isConfirmed) window.location.reload();
      });

      /*const shouldResetEverythingOrNot = confirm(message);

      if (shouldResetEverythingOrNot) window.location.reload();*/
    },

    aboutWindow() {
      const message = 'ProjectLegame. Editor de Botões criado por @Redwars22.';
      Swal.fire({
        icon: 'info',
        title: 'Sobre o Legame',
        text: message,
      });
    },

    changelog() {
      const changelog =
        '1-Atualizado para a versão estável, 2-Guia de ajuda adicionado, 3-Função de alterar fonte e tamanho dela';
      Swal.fire({
        icon: 'info',
        title: 'Changelog',
        text: changelog,
      });
    },

    openHelpWindow() {
      window.open(
        'https://redwars22.notion.site/Ajuda-do-Project-Legame-3a0ad8e4432a439d8d4424c951faaec9'
      );
    },
  },
};
</script>

<style>
.menu {
  align-items: center;
}

.menu-button {
  background-color: inherit;
  border: none;
  color: white;
  /*transition: color 500ms;*/
  transition: transform 600ms;
}

.menu-button:hover {
  color: crimson;
  border-bottom: 2px solid crimson;
  transform: rotate(5deg);
}
</style>
