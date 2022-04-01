<template>
  <a href="https://github.com/Redwars22/Projetos-Vuejs" class="footer-link">
    <div class="footer">
      Desenvolvido por
      <img src="https://github.com/Redwars22.png" width="50" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style>
.footer {
  background-color: crimson;
  color: white;
  padding: 10px;
  margin-top: 35px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

.footer-link {
  text-decoration: none;
}
</style>
