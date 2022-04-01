<template>
  <fieldset>
    <legend>Conversor de Milissegundo para Segundo</legend>
    <label class="form-label">
      <input
        type="number"
        id="ms-value"
        class="form-control"
        min="0"
        value="0"
      />
      ms</label
    >
    <label class="form-label"
      ><input
        type="number"
        id="s-value"
        class="form-control"
        min="0"
        value="0"
      />
      s</label
    >
  </fieldset>
</template>

<script>
export default {
  name: 'Fieldset',
};
</script>

<style scoped>
label {
  margin: 15px;
}
</style>
