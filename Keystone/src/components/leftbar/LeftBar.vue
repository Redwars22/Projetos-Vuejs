<template>
  <div class="left-bar">
    <img
      src="https://raw.githubusercontent.com/Redwars22/Projetos-Vuejs/main/resx/keystone.png"
      width="50"
      class="app-title"
    />
    <Menu />
    <a href="https://github.com/Redwars22">
      <div class="author-badge">
        <span>Criado por</span>
        <img
          src="https://github.com/Redwars22.png"
          class="author-photo"
          width="40"
        />
      </div>
    </a>
    <!--<p>Versão x.x.x ALPHA</p>-->
  </div>
</template>

<script>
import Menu from './Menu.vue';

export default {
  name: 'LeftBar',
  components: {
    Menu,
  },
};
</script>

<style>
a {
  text-decoration: none;
}

.left-bar {
  background-color: #0a0909;
  border-right: 3px dashed #7b032e;
  width: 7vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
}

.author-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: darkred;
  padding: 5px;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  gap: 5px;
}

.author-photo {
  border-radius: 100%;
  filter: contrast(120%);
  border: 4px dashed crimson;
}

@media (max-width: 600px) {
  .app-title {
    width: 32px;
  }

  .left-bar {
    flex-direction: row;
    height: 10vh;
    width: 100%;
    border-right: none;
    border-bottom: 3px dashed #7b032e;
    gap: 5px;
    justify-content: space-evenly;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .menu {
    flex-direction: row;
    gap: 15px;
  }

  .author-badge {
    flex-direction: row;
  }

  .author-photo {
    width: 30px;
  }
}
</style>
