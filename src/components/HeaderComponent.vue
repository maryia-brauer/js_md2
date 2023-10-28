<template>
  <div class="header" :class="{ 'logged-in': isLoggedIn }">
    <div class="left-section">
      <div class="logo">
        <img src="../assets/logo.svg" alt="Logo" />
        <h1>KRAAKEN.FM</h1>
      </div>
    </div>
    <div class="right-section">
      <div class="user-info" v-if="isLoggedIn">
        <div class="avatar" :style="{ backgroundColor: avatarColor }">
        </div>
        <span class="full-name">{{ fullName }}</span>
      </div>
      <button @click="toggleLoginStatus" class="login-btn">
        {{ isLoggedIn ? 'LOGOUT' : 'LOGIN' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Maryia",
        surname: "Brauer",
        code: "IT21057"
      },
      isLoggedIn: false
    };
  },
  computed: {
    fullName() {
      return `${this.user.name} ${this.user.surname}`;
    },
    avatarColor() {
      return 'grey'; 
    }
  },
  methods: {
    toggleLoginStatus() {
      if (this.isLoggedIn) {
        // Logout
        if (confirm('Do you want to log out?')) {
          this.isLoggedIn = false;
          // Emit an event for logout
          this.$emit('logout');
        }
      } else {
        // Login
        if (confirm('Do you want to log in?')) {
          this.isLoggedIn = true;
          // Emit an event for login
          this.$emit('login');
        }
      }
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #46404c;
  color: white;
}

.header.logged-in {
  background-color: purple;
}

.left-section {
  display: flex;
  align-items: center;
}

.right-section {
  display: flex;
  align-items: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.full-name {
  margin-right: 10px;
}

button.login-btn {
  background-color: #9040f1;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
}

.logo {
  display: flex;
  align-items: center;
}
</style>
