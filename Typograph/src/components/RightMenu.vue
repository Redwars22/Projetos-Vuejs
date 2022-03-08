<template>
  <div class="right-menu">
    <div class="parameters-box">
      <label>Fonte</label>
      <select></select>
      <label>Fonte Customizada</label>
      <input type="text" />
      <label>Tamanho</label>
      <input type="number" min="2" max="255" step="2" value="12" />
      <label>Cor</label>
      <input type="color" />
      <label>Fundo</label>
      <input type="color" />
      <label>Opacidade</label>
      <input type="range" min="0" max="100" value="100" />
      <label>Imagem de fundo</label>
      <input type="text" />
    </div>
    <!--<div class="with-left-margin">
      <button>APLICAR</button>
      <button>RESETAR<fluent-button>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'RightMenu',
};
</script>

<style scoped>
.parameters-box {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5px;
  text-align: right;
  margin: 20px;
}

.right-menu {
  border: 2px solid #383838;
  height: 100%;
  background-color: #535353;
  color: white;
}
</style>
