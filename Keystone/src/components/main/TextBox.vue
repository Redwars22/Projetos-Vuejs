<template>
  <div class="text-box" id="text-box" contenteditable @input="saveDraft"></div>
</template>

<script>
export default {
  name: 'TextBox',

  methods: {
    saveDraft() {
      let textContent = document.querySelector('#text-box').innerText;
      localStorage.setItem('draft', textContent);
    },
  },
};
</script>

<style>
.text-box {
  height: 255px;
  max-height: 255px;
  overflow: auto;
  width: auto;
  background-color: #201f1f;
  margin: 15px;
  padding: 10px;
  border-radius: 15px;
  color: white;
}
</style>
