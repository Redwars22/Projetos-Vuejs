<template>
  <div class="app-core">
    <Fieldset />
    <ButtonsContainer />
  </div>
</template>

<script>
import Fieldset from './Fieldset.vue';
import ButtonsContainer from './ButtonsContainer.vue';

export default {
  name: 'Core',
  components: {
    Fieldset,
    ButtonsContainer,
  },
};
</script>
