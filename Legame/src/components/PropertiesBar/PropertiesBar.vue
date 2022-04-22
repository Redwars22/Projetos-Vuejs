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
          <input id="bg-color" type="color" @input="setBackgroundColor" />
        </label>
        <label
          >Cor do Texto:
          <input id="fg-color" type="color" @input="setForegroundColor" />
        </label>
        <label
          >Cor da Borda:
          <input
            id="border-color-input"
            type="color"
            @input="setBorderProperties"
          />
        </label>
      </fieldset>

      <fieldset class="properties-box with-top-border">
        <legend>
          <i class="bi bi-aspect-ratio"></i>
          {Tamanhos}
        </legend>
        <label
          >Espessura da Borda:
          <input
            id="border-width"
            class="form-control"
            type="number"
            value="0"
            min="0"
            max="30"
            step="0.5"
            @change="setBorderProperties"
          />
        </label>
        <label
          >Altura:
          <input
            id="height"
            class="form-control"
            type="number"
            value="48"
            min="10"
            max="300"
            step="1"
            @input="setHeight"
          />
        </label>
        <label
          >Largura:
          <input
            id="width"
            class="form-control"
            type="number"
            value="140"
            min="10"
            max="300"
            step="1"
            @input="setWidth"
          />
        </label>
      </fieldset>

      <fieldset class="properties-box with-top-border">
        <legend>
          <i class="bi bi-layout-wtf"></i>
          {Extras}
        </legend>
        <label
          >Raio da Borda:
          <input
            id="border-radius"
            class="form-control"
            type="number"
            value="0"
            min="0"
            max="100"
            step="1"
            @input="setborderRadius"
          />
        </label>
        <label
          >Padding Horizontal:
          <input
            id="h-padding"
            class="form-control"
            type="number"
            value="12"
            min="0"
            max="50"
            step="1"
            @input="setHPadding"
          />
        </label>
        <label
          >Padding Vertical:
          <input
            id="v-padding"
            class="form-control"
            type="number"
            value="6"
            min="0"
            max="50"
            step="1"
            @input="setVPadding"
          />
        </label>
      </fieldset>

      <fieldset class="properties-box with-top-border">
        <legend>
          <i class="bi bi-paint-bucket"></i>
          {Tipografia}
        </legend>
        <label
          >Tamanho da Fonte:
          <input
            id="font-size"
            class="form-control"
            type="number"
            value="15"
            min="1"
            max="50"
            step="1"
            @input="setFontSize"
          />
        </label>
        <label>
          Fonte:
          <button class="btn btn-danger" @click="setFont">ESCOLHER</button>
        </label>
        <!--<label
          >Estilo da Fonte:
          <select id="font-style" class="form-select" @input="setFontStyle">
            <option value="normal">
              Normal
            </option>
            <option value="bold">
              Negrito
            </option>
            <option value="italic">
              Itálico
            </option>
            <option value="underline">
              Sublinhado
            </option>
          </select>
        </label>-->
      </fieldset>

      <fieldset class="properties-box with-top-border">
        <legend>
          <i class="bi bi-code-slash"></i>
          {Scripts e Eventos}
        </legend>
        <textarea
          id="script"
          class="form-control"
          style="font-size: 13px; font-weight: 800"
          rows="5"
        />
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
  public backgroundColor: string;
  public foregroundColor: string;
  public borderColor: string;
  public borderWidth: string;
  public borderRadius: string;
  public borderProperties: string;
  public width: string;
  public height: string;
  public fontSize: string;
  public Vpadding: string;
  public font: string;
  public fontWeight: number;

  constructor(){
    this.borderWidth = '0px';
    this.borderProperties = '0px solid #fff';
  }

  getFont(){
    this.font = prompt("Insira o nome da fonte (ela deve estar instalada em seu dispositivo): ");
    return this.font;
  }

  getFontWeight(){
    this.fontWeight = parseInt(prompt("Insira o peso da fonte (o valor deve ser entre 100 e 900)"));
    if(this.fontWeight < 100) this.fontWeight == 100;
    if(this.fontWeight > 900) this.fontWeight == 900;
    if(this.fontWeight % 100 != 0) 
      window.alert("O peso da fonte é inválido! Por favor insira um número entre 100 e 900 que seja divisível por 100!");
    else return this.fontWeight.toString();
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
    },

    setBorderProperties(){
      button.borderColor = (document.getElementById('border-color-input') as HTMLInputElement).value;
      button.borderWidth = (document.getElementById('border-width') as HTMLInputElement).value.toString();
      button.borderProperties = button.borderWidth + "px solid " + button.borderColor;
      document.getElementById('editable-button').style['border'] = button.borderProperties;
    },

    setborderRadius(){
      button.borderRadius = (document.getElementById('border-radius') as HTMLInputElement).value;
      document.getElementById('editable-button').style['border-radius'] = button.borderRadius + "px";
    },

    setFontSize(){
      button.fontSize = (document.getElementById('font-size') as HTMLInputElement).value;
      document.getElementById('editable-button').style['font-size'] = button.fontSize + "px";
    },

    setWidth(){
      button.width = (document.getElementById('width') as HTMLInputElement).value;
      document.getElementById('editable-button').style['width'] = button.width + "px";
    },

    setHeight(){
      button.height = (document.getElementById('height') as HTMLInputElement).value;
      document.getElementById('editable-button').style['height'] = button.height + "px";
    },

    setHPadding(){
      button.Hpadding = (document.getElementById('h-padding') as HTMLInputElement).value;
      document.getElementById('editable-button').style['padding-left'] = button.Hpadding + "px";
      document.getElementById('editable-button').style['padding-right'] = button.Hpadding + "px";
    },

    setVPadding(){
      button.Vpadding = (document.getElementById('v-padding') as HTMLInputElement).value;
      document.getElementById('editable-button').style['padding-top'] = button.Vpadding + "px";
      document.getElementById('editable-button').style['padding-bottom'] = button.Vpadding + "px";
    },

    setFont(){
      document.getElementById('editable-button').style['font-family'] = button.getFont();
      document.getElementById('editable-button').style['font-weight'] = button.getFontWeight();
    },
  },
}
</script>

<style scoped>
label {
  display: grid;
  grid-template-columns: 67% 33%;
  align-items: center;
}

.properties-bar {
  max-height: 82vh;
  min-width: 30%;
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
  gap: 10px;
}

legend {
  color: crimson;
  font-size: 15px;
  text-align: left;
}

.with-top-border {
  border-top: 2px dashed crimson;
}

.properties-container {
  padding: 10px;
}

.select-icon {
  color: crimson;
}
</style>
