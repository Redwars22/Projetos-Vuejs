<template>
  <div class="form-grid">
    <h1>Gere um link do WhatsApp</h1>
    <div class="ui left icon input">
      <input
        type="tel"
        id="phonenumber"
        placeholder="Digite o telefone.."
        required
      />
      <i class="phone icon"></i>
    </div>
    <div class="ui left icon input">
      <input
        type="text"
        id="message"
        placeholder="Escreva a mensagem..."
        maxlength="128"
        required
      />
      <i class="envelope icon"></i>
    </div>
    <GenerateLinkButton />
    <div class="ui corner labeled input">
      <input type="text" id="link-result" placeholder="Link do WhatsApp..." />
      <div class="ui corner label">
        <i class="linkify icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import GenerateLinkButton from './GenerateLinkButton.vue';

export default {
  name: 'DataForm',
  components: {
    GenerateLinkButton,
  },
};
</script>

<style scoped>
.form-grid {
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;
}

@media (max-width: 700px) {
  .form-grid {
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
