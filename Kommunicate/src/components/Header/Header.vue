<template>
  <div class="app-header">
    <AppLogo />
    <AppMenu />
  </div>
</template>

<script>
import AppLogo from './AppLogo.vue';
import AppMenu from './AppMenu.vue';

export default {
  name: 'Header',
  components: {
    AppLogo,
    AppMenu,
  },
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  align-items: center;
  margin: 25px 10% 25px 10%;
  height: 40px;
  max-height: 40px;
}
</style>
