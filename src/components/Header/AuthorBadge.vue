<template>
  <a
    href="https://github.com/Redwars22"
    style="text-decoration: none"
    target="_blank"
  >
    <div class="author-badge">
      <span>Desenvolvido por</span>
      <img src="https://github.com/Redwars22.png" class="author-photo" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'AuthorBadge',
};
</script>

<style scoped>
.author-badge {
  background-color: crimson;
  display: flex;
  padding: 5px;
  align-items: center;
  border-radius: 10px;
  width: fit-content;
  font-size: 13px;
  gap: 10px;
  color: white;
  /*transition: background-color 600ms;*/
  transition: transform 600ms;
}

.author-badge:hover {
  background-color: purple;
  font-weight: bold;
  transform: rotate(360deg);
}

.author-photo {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
</style>
