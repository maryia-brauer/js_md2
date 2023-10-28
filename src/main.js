import { createApp } from 'vue';
import App from './App.vue'; 
import songsData from './assets/song-list.json';
import router from './router';
import { useGlobalStore } from './store';

import LandingComponent from './components/LandingComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue'; 
import HomeComponent from './components/HomeComponent.vue';
import SongListComponent from './components/SongListComponent.vue';
import SongFilterComponent from './components/SongFilterComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import FormComponent from './components/FormComponent.vue';
import {createPinia} from 'pinia';

const pinia = createPinia();
const app = createApp(App); 
app.use(router);
app.use(pinia);

app.config.globalProperties.$songsData = songsData;
export default {
    setup() {
      const store = useGlobalStore();
    },
  };


// Register all components globally
app.component('LandingComponent', LandingComponent);
app.component('HeaderComponent', HeaderComponent);
app.component('NavigationComponent', NavigationComponent);
app.component('HomeComponent', HomeComponent);
app.component('SongListComponent', SongListComponent);
app.component('SongFilterComponent', SongFilterComponent);
app.component('AboutMeComponent', AboutMeComponent);
app.component('FormComponent', FormComponent);

app.mount('#app'); 
