<template>
  <div class="notes-view" id="notes-view"></div>
  <h3 id="empty-alert" style="text-align: center; color: white">
    <i class="bi bi-exclamation-triangle-fill"></i>
    OOPS, NÃO HÁ NADA AQUI! CRIE UMA NOTA PARA VẼ-LA AQUI!
  </h3>
</template>

<script>
export default {
  name: 'NotesView',
};
</script>

<style>
.notes-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 15px;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
}

.note-box {
  height: auto;
  min-width: 350px;
  max-width: 350px;
  overflow-wrap: break-word;
  gap: 10px;
  border-radius: 15px;
  color: white;
  padding: 10px;
  box-shadow: 0px 4px 4px 0px rgba(220, 20, 60, 25%);
}

.text-view {
  max-height: 200px;
  overflow: auto;
}
</style>
