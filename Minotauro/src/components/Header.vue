<template>
  <div class="header">
    <img
      src="https://redwars22.github.io/Projetos-Vuejs/resx/minotauro.png"
      width="40"
    />
    <div class="form">
      <input class="search-box" placeholder="Procure algo para assistir" />
      <button class="empty-button"><i class="bi bi-search icon"></i></button>
    </div>
    <img
      src="https://github.com/Redwars22.png"
      width="40"
      class="author-photo"
    />
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid lightgrey;
  display: flex;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
}

.empty-button {
  background-color: rgba(0, 0, 0, 0);
  border: none;
}

.icon {
  color: crimson;
  font-weight: bolder;
  font-size: 20px;
}

.search-box {
  border: none;
  width: 55vw;
  background-color: rgba(0, 0, 0, 0);
}

.form {
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: fit-content;
}

.author-photo {
  box-shadow: 1px 1px 1px 0px #ff000087;
  border-radius: 100%;
}
</style>
