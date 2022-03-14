<template>
  <div class="right-menu">
    <div class="parameters-box">
      <!--<label>Fonte</label>
      <select id="fonts">
        <option value="arial">Arial</option>
        <option value="Comic Sans">Comic Sans</option>
        <option value="Consolas">Consolas</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>-->
      <!--<fieldset>
        <legend style="font-size: 12px">Parâmetros do Texto</legend>-->
      <label>Fonte</label>
      <input type="text" id="custom-font" value="Arial"/>
      <label>Tamanho</label>
      <input type="number" id="font-size" min="2" max="255" step="2" value="12" />
      <label>Cor</label>
      <input type="color" id="fg-color"/>
      <label>Fundo</label>
      <input type="color" id="bg-color" value="#ffffff"/>
      <label>Opacidade</label>
      <input type="range" id="opacity" min="0" max="1.0" value="1.0" step="0.05" />
      <label>Imagem fundo</label>
      <input type="url" id="image"/>
    </div>
    <div class="buttons-container">
      <button class="btn btn-blue" @click="applySettings"><i class="bi bi-check-square"></i> APLICAR</button>
      <button class="btn btn-red" @click="resetSettings"><i class="bi bi-trash"></i> RESETAR<fluent-button>
    </div>
    <a href="https://github.com/Redwars22">
      <div class="author-badge">
        <div class="author-badge-text-container">
          <h2 class="author-smaller-text">Desenvolvido por</h2>
          <h1 class="author-bigger-text">André Pereira (@Redwars22)</h1>
        </div>
        <img class="rounded-image" src="https://github.com/Redwars22.png" width="75px"/>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'RightMenu',

  methods: {
    applySettings(){
      let textEditor = document.getElementById('text-editor');
      let fgcolor = document.getElementById('fg-color').value;
      let bgcolor = document.getElementById('bg-color').value;
      let fontSize = document.getElementById('font-size').value;
      let font = document.getElementById('custom-font').value;
      let opacity = document.getElementById('opacity').value;
      let imageurl = document.getElementById('image').value;
      textEditor.style['font-size'] = fontSize + "px";
      textEditor.style['background-color'] = bgcolor;
      textEditor.style['color'] = fgcolor;
      textEditor.style['font-family'] = font;
      textEditor.style['opacity'] = opacity;

      if(document.getElementById('image').value != ''){
        textEditor.style['background-image'] = "url('" + imageurl + "')";
      } else {
        textEditor.style['background-image'] = "";
      }
    },

    resetSettings(){
    document.getElementById('fg-color').value = "#000000";
    document.getElementById('bg-color').value = "#ffffff";
    document.getElementById('font-size').value = "12";
    document.getElementById('custom-font').value = "Alice";
    document.getElementById('opacity').value = "100";
    document.getElementById('image').value = "";
  }
  },
};
</script>

<style scoped>
.author-badge {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: crimson;
  padding: 8px;
  margin: 10px;
  gap: 5px;
  margin-top: 145px;
  margin-bottom: -145px;
  border-radius: 10px;
  color: black;
  transition: background-color 450ms;
}

.author-badge:hover {
  background-color: red;
}

a {
  text-decoration: none;
}

.author-smaller-text {
  font-size: 13px;
}

.rounded-image {
  border-radius: 50%;
}

.author-bigger-text {
  font-size: 16px;
}

.parameters-box {
  display: grid;
  grid-template-columns: 37% 63%;
  gap: 7px;
  text-align: right;
  margin: 20px;
  border: 1px dotted rgba(0, 0, 0, 0.1);
}

input {
  background-color: #424242;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'JetBrains Mono', monospace;
  padding: 4px;
  margin-bottom: 9px;
}

#fg-color, #bg-color {
  padding: 1px;
}

#opacity {
  padding: 0px;
}

label {
  font-size: 14px;
}

.right-menu {
  border: 2px solid #383838;
  height: 100%;
  background-color: #535353;
  color: white;
  border-bottom-right-radius: 10px;
}

.bi {
  color: white;
}

.btn {
  border-radius: 10px;
  border: none;
  margin: 5px;
  padding: 5px;
  color: white;
  font-family: 'JetBrains Mono', monospace;
  border: 1px solid white;
  filter: saturate(100%);
  transition: filter 300ms;
}

.btn:hover {
  filter: saturate(200%);
}

.btn:active {
  color: black;
  background-color: lightgrey;
}

.btn-blue {
  background-color: seagreen;
}

.btn-red {
  background-color: crimson;
}
</style>
