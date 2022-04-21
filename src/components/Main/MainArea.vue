<template>
  <div class="main-area">
    <ButtonElement />
    <PropertiesBar />
  </div>
</template>

<script>
import PropertiesBar from '../PropertiesBar/PropertiesBar.vue';
import ButtonElement from './ButtonElement.vue';

export default {
  name: 'MainArea',
  components: {
    PropertiesBar,
    ButtonElement,
  },
};
</script>

<style scoped>
.button-editor {
  min-height: 80vh;
  max-height: 80vh;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(48, 14, 28);
  background: linear-gradient(
    90deg,
    rgba(48, 14, 28, 0.0945553221288515) 27%,
    rgba(230, 7, 68, 0.096516106442577) 61%,
    rgba(255, 0, 0, 0.028895308123249297) 100%
  );
}

.main-area {
  display: flex;
  width: 97vw;
  min-width: 97vw;
  max-width: 97vw;
  justify-content: space-between;
  padding: 15px;
}

.text-block {
  width: 100%;
  text-align: left;
  color: orange;
}
</style>
