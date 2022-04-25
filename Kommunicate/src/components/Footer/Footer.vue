<template>
  <div class="footer">
    <p>
      ©2022. Kommunicate. Software de Código Aberto.
      <a class="link" href="">Obtenha seu código-fonte aqui</a>
    </p>
    <AuthorBadge />
  </div>
</template>

<script>
import AuthorBadge from './AuthorBadge.vue';

export default {
  name: 'Footer',
  components: {
    AuthorBadge,
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  margin-left: 10%;
  margin-right: 10%;
}

.link {
  color: #21ba45;
}
</style>
