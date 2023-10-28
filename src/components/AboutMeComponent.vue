<template>
  <div>
    <h1>ABOUT ME</h1>
    <h3>Name: {{ user.name }}</h3>
    <h3>Surname: {{ user.surname }}</h3>
    <h3>Code: {{ user.code }}</h3>
    
    <button @click="toggleEditMode" :class="{ active: isEditMode }">
      {{ isEditMode ? 'CANCEL' : 'EDIT FORM' }}
    </button>
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
      isEditMode: false
    };
  },
  methods: {
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    }
  }
};
</script>

<style scoped>
.active {
  background-color: purple;
  color: white;
}
</style>
