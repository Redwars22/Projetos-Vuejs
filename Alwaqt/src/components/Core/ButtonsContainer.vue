<template>
  <div class="btn-group">
    <button class="btn btn-dark" @click="millisecondToSecond">
      MILISSEGUNDO PARA SEGUNDO
    </button>
    <button class="btn btn-danger" @click="secondToMillisecond">
      SEGUNDO PARA MILISSEGUNDO
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonsContainer',
  methods: {
    millisecondToSecond(){
      let ms: number = parseFloat((document.getElementById('ms-value') as HTMLInputElement).value);
      let s : number = ms/1000;
      /*document.getElementById('result').innerText = s.toString() + "s";*/
      document.getElementById('s-value').value = s.toString();
    },

    secondToMillisecond(){
      let s: number = parseFloat((document.getElementById('s-value') as HTMLInputElement).value);
      let ms : number = s * 1000;
      /*document.getElementById('result').innerText = ms.toString() + "s";*/
      document.getElementById('ms-value').value = ms.toString();
    }
  }
};
</script>
