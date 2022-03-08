<template>
  <div class="menu">
    <button class="first-btn"><i class="bi bi-save"></i></button>
    <button><i class="bi bi-folder2-open"></i></button>
    <button><i class="bi bi-trash"></i></button>
    <button><i class="bi bi-text-left"></i></button>
    <button><i class="bi bi-text-center"></i></button>
    <button><i class="bi bi-text-right"></i></button>
    <button><i class="bi bi-fonts"></i></button>
    <button><i class="bi bi-type-bold"></i></button>
    <button><i class="bi bi-type-italic"></i></button>
    <button><i class="bi bi-type-underline"></i></button>
    <button><i class="bi bi-info-square"></i></button>
    <button><i class="bi bi-question-circle"></i></button>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
};
</script>

<style scoped>
.menu {
  height: 100%;
  width: 100%;
  background-color: #535353;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bi {
  font-size: 19px;
  /*color: #424242;*/
  color: grey;
}

button {
  max-width: 40px;
  border: none;
  background-color: inherit;
  margin-bottom: 7px;
}

.first-btn {
  margin-top: 10px;
}
</style>
