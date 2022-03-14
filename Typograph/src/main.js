const { createApp } = require('vue');
import App from './App.vue';

createApp(App).mount('#app');

if (window.innerWidth < 1000) {
  document.write(
    "<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fgeneric-06%2F100%2FArtboard_136-512.png&f=1&nofb=1' width='100px'/><p>Esta aplicação foi projetada para funcionar em dispositivos com tela grande, como tablets e desktops. " +
      'Aumente o tamanho da janela e recarregue a página!</p>'
  );
}
