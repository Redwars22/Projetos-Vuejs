<template>
  <div class="properties-bar">
    <fieldset class="properties-container">
      <legend>
        <i class="bi bi-sliders"></i>
        {Propriedades do Botão}
      </legend>

      <fieldset class="properties-box">
        <legend>
          <i class="bi bi-paint-bucket"></i>
          {Cores}
        </legend>
        <label
          >Plano de Fundo:
          <input
            id="bg-color"
            class=""
            type="color"
            @input="setBackgroundColor"
          />
        </label>
        <label
          >Cor do Texto:
          <input
            id="fg-color"
            class=""
            type="color"
            @input="setForegroundColor"
          />
        </label>
      </fieldset>

      <fieldset class="properties-box with-top-border">
        <legend>
          <i class="bi bi-aspect-ratio"></i>
          {Tamanhos}
        </legend>
      </fieldset>

      <fieldset class="properties-box with-top-border">
        <legend>
          <i class="bi bi-layout-wtf"></i>
          {Extras}
        </legend>
      </fieldset>

      <fieldset class="properties-box with-top-border">
        <legend>
          <i class="bi bi-paint-bucket"></i>
          {UNDEFINED}
        </legend>
      </fieldset>

      <fieldset class="properties-box with-top-border">
        <legend>
          <i class="bi bi-code-slash"></i>
          {Scripts e Eventos}
        </legend>
        <textarea id="script" class="form-control" />
        <button @click="runScript" class="btn btn-danger">
          <i class="bi bi-play"></i>
          EXECUTAR
        </button>
      </fieldset>
    </fieldset>
  </div>
</template>

<script>
class Button {
  public backgroundColor;
  public foregroundColor;

  constructor(){
    this.backgroundColor = "";
    this.foregroundColor = "";
  }
}

const button = new Button();

export default {
  name: 'PropertiesBar',
  methods: {
    runScript() {
      let code = (document.getElementById("script") as HTMLInputElement).value;
      eval(code);
    },

    setBackgroundColor(){
      button.backgroundColor = (document.getElementById('bg-color') as HTMLInputElement).value;
      document.getElementById('editable-button').style['background-color'] = button.backgroundColor;
    },

    setForegroundColor(){
      button.foregroundColor = (document.getElementById('fg-color') as HTMLInputElement).value;
      document.getElementById('editable-button').style['color'] = button.foregroundColor;
    }
  },
}
</script>

<style scoped>
label {
  display: grid;
  grid-template-columns: 80% 20%;
}

.properties-bar {
  max-height: 85vh;
  min-width: 26%;
  border-left: 2px dashed crimson;
  overflow: auto;
}

.properties-box {
  border: 5;
  display: flex;
  flex-direction: column;
  color: white;
  margin: 10px;
  padding: 10px;
}

legend {
  color: white;
  font-size: 15px;
  text-align: left;
}

.with-top-border {
  border-top: 2px dashed crimson;
}

.properties-container {
  padding: 10px;
}
</style>
