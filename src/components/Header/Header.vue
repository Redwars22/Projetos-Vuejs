<template>
  <div class="header">
    <div class="upper-menu-container">
      <AppTitle />
      <Menu />
      <AuthorBadge />
    </div>
  </div>
</template>

<script>
import AuthorBadge from './AuthorBadge.vue';
import Menu from './Menu.vue';
import AppTitle from './AppTitle.vue';

export default {
  name: 'Header',
    components: {
    AuthorBadge,
    Menu,
    AppTitle,
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

.app-title {
  font-size: 15px;
  font-weight: 100;
  color: white;
}
</style>
