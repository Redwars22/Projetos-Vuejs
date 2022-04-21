<template>
  <div class="app-title-container">
    <img
      src="https://redwars22.github.io/Projetos-Vuejs/resx/legame.png"
      class="app-logo"
    />
    <h1 class="app-title">ProjectLegame v1.0.0</h1>
    <h1 class="dev-badge" v-if="(isDEV == true)">DEV</h1>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',
  data() {
    return {
      isDEV: false,
    };
  },
};
</script>

<style scoped>
.dev-badge {
  color: orange;
  font-weight: 900;
  font-size: 25px;
}

.app-title-container {
  display: flex;
  gap: 25px;
  align-items: center;
}

.app-logo {
  width: 25px;
  height: 25px;
}
</style>
