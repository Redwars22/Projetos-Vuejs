<template>
  <div class="header">
    <div class="upper-menu-container">
      <img
        src="https://redwars22.github.io/Projetos-Vuejs/resx/legame.png"
        height="25px"
        width="25px"
      />
      <h1 class="app-title">ProjectLegame v0.0.1 ALPHA</h1>
      <div class="menu">
        <!--<button class="menu-button"></button>
        <button class="menu-button"></button>-->
        <button class="menu-button">
          <i class="bi bi-recycle"></i>
          Resetar
        </button>
        <button class="menu-button">
          <i class="bi bi-question-square"></i>
          Como Usar
        </button>
        <button class="menu-button">
          <i class="bi bi-info-square"></i>
          Sobre o Legame
        </button>
        <button class="menu-button">
          <i class="bi bi-tools"></i>
          Changelog
        </button>
      </div>
      <AuthorBadge />
    </div>
  </div>
</template>

<script>
import AuthorBadge from './AuthorBadge.vue';

export default {
  name: 'Header',
  components: {
    AuthorBadge,
  },
};
</script>

<style scoped>
.upper-menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}

.menu-button {
  background-color: inherit;
  border: none;
  color: white;
  transition: color 500ms;
}

.menu-button:hover {
  color: crimson;
  border-bottom: 2px solid crimson;
}

.app-title {
  font-size: 15px;
  font-weight: 100;
  color: white;
}

menu {
  align-items: center;
}
</style>
