<template>
  <div class="text-editor-container">
    <div class="text-box-container">
      <TextBox />
    </div>
    <div class="buttons-container">
      <label style="color: white"
        >FUNDO:
        <input type="color" id="color" value="#201f1f" @input="changeBg"
      /></label>
      <button class="text-area-button green" @click="addToNotes">
        <i class="bi bi-plus-square button-icon"></i>
        ADICIONAR
      </button>
      <button class="text-area-button red" @click="reset">
        <i class="bi bi-arrow-clockwise button-icon"></i>
        RESETAR
      </button>
    </div>
  </div>
</template>

<script>
import TextBox from './TextBox.vue';

export default {
  name: 'TextEditor',

  components: {
    TextBox,
  },

  methods: {
    changeBg(){
      document.querySelector('#text-box').style['background-color'] = (document.querySelector('#color') as HTMLInputElement).value;
    },

    reset(){
      let toResetOrNot = confirm("Você tem certeza de que deseja apagar o texto?");

      if(toResetOrNot){
        document.querySelector('#text-box').innerText = "";
      }
    },

    addToNotes() {
      document.getElementById('empty-alert').innerText = '';

      let date = new Date;
      let text = document.querySelector('#text-box').innerText;
      let notesView = document.querySelector('.notes-view');
      let HTMLCode = document.querySelector('.notes-view').innerHTML;
      let dateString = ("Escrito em: " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
      let color = (document.querySelector('#color') as HTMLInputElement).value;
      let injectHTML = ("<div class='note-box' id='note-box' style='background-color: " + color + "'><p class='text-view' contenteditable>" + text + "</p><em style='text-align: right'>"+ dateString +"</em></div>" + HTMLCode);
      notesView.innerHTML = injectHTML;
      localStorage.setItem("text-data", notesView.innerHTML);
    },
  }
};
</script>

<style>
.text-editor-container {
  background-color: #10021b;
  width: 80%;
  height: fit-content;
  border: 3px solid #7b0117;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.buttons-container {
  display: flex;
  gap: 15px;
  margin-left: auto;
  padding: 10px;
}

#color {
  border: none;
}

.text-area-button {
  padding: 5px;
  border-radius: 5px;
  border: 2px dashed white;
  color: white;
  font-weight: bold;
}

.button-icon {
  font-size: 15px;
  color: white;
}

.green {
  background-color: #00835b;
}

.red {
  background-color: #9b0239;
}

@media (max-width: 600px) {
  .text-editor-container {
    width: 95%;
    margin-top: 20px;
  }
}
</style>
