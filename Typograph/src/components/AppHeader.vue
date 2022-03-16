<template>
  <div class="header">
    <div class="buttons-grid">
      <button class="rounded red"></button>
      <button class="rounded yellow"></button>
      <button class="rounded green"></button>
    </div>
    <img
      class="app-logo"
      src="https://redwars22.github.io/Projetos-Vuejs/resx/typograph.png"
      width="25px"
    />
    <span>Project Typograph 2022</span>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style>
span {
  font-size: 13px;
}

.header {
  border: 2px solid #383838;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  background-color: #535353;
  color: white;
  display: flex;
  flex-direction: row;
  min-height: 30px;
  align-items: center;
  gap: 5px;
  padding-left: 10px;
  padding-right: 10px;
}

.rounded {
  border-radius: 100%;
  width: 12px;
  height: 12px;
  border: none;
  margin: 3px;
}

.green {
  background-color: #29c940;
}

.red {
  background-color: #ff6158;
}

.yellow {
  background-color: #ffbc2e;
}
</style>
