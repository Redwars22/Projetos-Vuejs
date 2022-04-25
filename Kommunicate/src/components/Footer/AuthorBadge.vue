<template>
  <a class="author-badge ui green button" href="https://github.com/Redwars22">
    <span>Criado por</span>
    <img class="ui avatar image" src="https://github.com/Redwars22.png" />
  </a>
</template>

<script>
export default {
  name: 'AuthorBadge',
};
</script>

<style scoped>
.author-badge {
  background-color: #21ba45;
  display: flex !important;
  flex-direction: row !important;
  gap: 10px !important;
  align-items: center;
}
</style>
