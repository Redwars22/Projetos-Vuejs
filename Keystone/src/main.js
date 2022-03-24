const { createApp } = require('vue');
import App from './App.vue';

createApp(App).mount('#app');

window.onload = function () {
  setInterval(function () {
    let notesView = document.querySelector('.notes-view');
    localStorage.setItem('text-data', notesView.innerHTML);
  }, 1000);
};

//Recuperar da memória rascunhos salvos
let textEditor = document.querySelector('#text-box');
let textContent = localStorage.getItem('draft');
textEditor.innerText = textContent;

//
if (localStorage.getItem('text-data') !== null) {
  document.getElementById('empty-alert').innerText = '';
  document.getElementById('notes-view').innerHTML =
    localStorage.getItem('text-data');
}

//Setar tema claro como falso se já não existir essa propriedade
if (localStorage.getItem('light-theme') == null) {
  localStorage.setItem('light-theme', 'false');
}

//Aplicar tema claro à aplicação
if (localStorage.getItem('light-theme') == 'true') {
  document.querySelector('.left-bar').style['background-color'] = '#9C75DD';
  document.querySelector('.author-badge').style['background-color'] = 'purple';
  document.querySelector('.right-bar').style['background-color'] = '#E1CFFF';
  document.querySelector('#empty-alert').style['color'] = '#000000';
  document.querySelector('.text-editor-container').style['background-color'] =
    '#7D35B7';
  document.querySelector('#text-box').style['background-color'] = '#D2D2D2';
  document.querySelector('#text-box').style['color'] = '#000';
  document.querySelector('.bi-brightness-high-fill').style['color'] = '#fff';
  document.querySelector('.bi-moon-stars-fill').style['color'] = '#fff';
  document.querySelector('.bi-trash').style['color'] = '#fff';
  document.querySelector('.bi-check2-all').style['color'] = '#fff';
  document.querySelector('.bi-info-circle').style['color'] = '#fff';
  document.querySelector('.bi-question-circle').style['color'] = '#fff';
}
