<template>
  <div class="container">
    <router-link to="/home">
      <button class="btn" :class="{ active: homeActive, 'triangle': $route.path === '/home' }" @click="showHome">HOME</button>
    </router-link>
    <router-link to="/about-me">
      <button class="btn" :class="{ active: aboutMeActive, 'triangle': $route.path === '/about-me' }" @click="showAboutMe">ABOUT ME</button>
    </router-link>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      homeActive: true,
      aboutMeActive: false,
    };
  },
  computed: {
    $route() {
      return useRouter().currentRoute.value;
    },
  },
  methods: {
    showHome() {
      this.homeActive = true;
      this.aboutMeActive = false;
      this.$emit("show-home");
    },
    showAboutMe() {
      this.homeActive = false;
      this.aboutMeActive = true;
      this.$emit("show-about-me");
    },
  },
};
</script>

<style scoped>
.active {
  background-color: purple;
  color: white;
}
</style>
