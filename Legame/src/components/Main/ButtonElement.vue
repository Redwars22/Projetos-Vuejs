<template>
  <fieldset class="button-editor">
    <legend>
      <i class="bi bi-pencil"></i>
      {Editor de Botão}
    </legend>
    <button
      id="editable-button"
      class="btn btn-primary editable-button"
      contenteditable
    >
      NOME DO BOTÃO
    </button>
    <div class="text-block">
      <p>
        <h1 style="font-size: 18px; font-weight: bold">
          <i class="bi bi-exclamation-triangle-fill"></i>
          INSTRUÇÕES
        </h1>
        Clique no botão para alterar seu texto. Altere os valores da barra de propriedades à direita para modificá-lo.
      </p>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'ButtonElement'
}
</script>

<style scoped>
#editable-button {
  margin: auto;
  border-style: solid;
}

</style>