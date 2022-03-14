const { createApp } = require('vue');
import App from './App.vue';

createApp(App).mount('#app');

if (window.innerWidth < 1000) {
  document.write(
    'Esta aplicação foi projetada para funcionar em dispositivos com tela grande, como tablets e desktops.' +
      'Aumente o tamanho da janela e recarregue a página!'
  );
}
