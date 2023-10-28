import { createRouter, createWebHistory } from 'vue-router';
import { useGlobalStore } from './store';
import LandingComponent from './components/LandingComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';


const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingComponent,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeComponent,
    beforeEnter: (to, from, next) => {
      const store = useGlobalStore();
      if (store.isUserLoggedIn) {
        next();
      } else {
        next('/');
      }
    },
    
  },
  {
    path: '/about-me',
    name: 'about-me',
    component: AboutMeComponent,
    beforeEnter: (to, from, next) => {
      const store = useGlobalStore();
      if (store.isUserLoggedIn) {
        next();
      } else {
        next('/');
      }
    },    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
