<template>
  <div class="text-area">
    <div class="text-editor" contentEditable="true"></div>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
};
</script>

<style scoped>
.text-area {
  min-height: calc(100vh - 20%);
  background-color: white;
  min-width: calc(100vw - 60%);
  max-width: calc(100vw - 60%);
  display: flex;
  box-shadow: 3px 3px 5px 2px black;
}

.text-editor {
  border: 1px solid red;
  width: 100%;
  margin: 10px;
  border: 2px dashed rgba(100, 100, 100, 0.5);
  border-radius: 10px;
  text-align: left;
  padding: 5px;
}
</style>
