<template>
  <div class="app">
    <HeaderComponent @login="handleLogin" @logout="handleLogout" />
    <div class="content" v-if="isLoggedIn">
      <div class="navigation-column">
        <NavigationComponent @tab-change="changeActiveTab" :activeTab="activeTab" />
      </div>
      <div class="content-column">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';

export default {
  components: {
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    AboutMeComponent
  },
  data() {
    return {
      isLoggedIn: false,
      activeTab: '' 
    };
  },
  methods: {
    handleLogin() {
      this.isLoggedIn = true;
      this.activeTab = 'home'; 
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.activeTab = ''; 
    },
    changeActiveTab(tab) {
      this.activeTab = tab;
    }
  }
};
</script>

<style>
body {
  background-color: #1a1622; 
}

.app {
  font-family: Arial, sans-serif;
  background-color: #1a1622;
  color: white;
}

.content {
  display: flex;
}

.navigation-column {
  width: 20%;
  padding: 10px;
  background-color: #46404c;
}

.content-column {
  width: 80%;
  padding: 10px;
}

ul.tabs {
  list-style-type: none;
  padding: 0;
}

ul.tabs li {
  margin-bottom: 10px;
  cursor: pointer;
}

ul.tabs li.active {
  border-bottom: 2px solid white;
}
</style>
