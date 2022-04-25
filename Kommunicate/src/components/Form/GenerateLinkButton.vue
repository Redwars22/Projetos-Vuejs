<template>
  <button @click="generateLink" class="ui green button">
    <i class="phone square icon"></i>
    GERAR LINK
  </button>
</template>

<script>
import WhatsAppLink from './handleData.js';

class WhatsAppLink {
  private phone: string;
  private message: string;
  private const baseURL: string = "https://api.whatsapp.com/?phone=";
  private fullLink: string;
  private const phonePattern = /[0-9]()-/;
  private isPhoneValid: boolean;
  private isMessageNull: boolean;

  setPhone(){
    let number = (document.getElementById("phonenumber") as HTMLInputElement).value;
    this.phone = number;

    if(!this.phonePattern.test(this.phone)){
      Swal.fire({
        title: 'Oops, ocorreu um erro!',
        icon: 'error',
        text: 'Você deve inserir um número de telefone válido. No formato: (42)99999-9999'
      });
      this.isPhoneValid = false;
    } else {
      this.isPhoneValid = true;
    }
  }

  setMessage(){
    this.message = (document.getElementById("message") as HTMLInputElement).value;

    if(this.message == "") this.isMessageNull = true;
    else this.isMessageNull = false;

    if(this.isMessageNull)
      Swal.fire({
        title: 'Oops, ocorreu um erro!',
        text: 'O campo mensagem não pode estar vazio!',
        icon: 'error'
      });
  }

  isDataValid(){
    if(!this.isPhoneValid || this.isMessageNull) return false;
    else if (this.isPhoneValid || !this.isMessageNull) return true;
    else return false;
  }

  getLinkToWhatsApp() {
    if(this.isDataValid()){
      this.fullLink = this.baseURL + this.phone + "&text=" + this.message;
      return this.fullLink;
    } else {
      Swal.fire({
        title: 'Oops, ocorreu um erro!',
        text: 'Verifique se você preencheu todos os campos com dados válidos e tente novamente!',
        icon: 'error'
      });
    }
  }
}

export default {
  name: 'GenerateLinkButton',
  methods: {
    generateLink() {
      let link = new WhatsAppLink();
      link.setPhone();
      link.setMessage();
      (document.getElementById("link-result") as HTMLInputElement).value = link.getLinkToWhatsApp();
    },
  },
};
</script>

<style scoped></style>
