<template>
    <div>
      <form>
        <div class="form-row">
          <label>First name:</label>
          <input
            :value="user.name"
            :disabled="!isEditMode"
            @input="updateFirstName"
            :class="{ disabled: !isEditMode }"
          />
        </div>
        <div class="form-row">
          <label>Last name:</label>
          <input
            :value="user.surname"
            :disabled="!isEditMode"
            @input="updateLastName"
            :class="{ disabled: !isEditMode }"
          />
        </div>
        <div class="form-row">
          <label>Student code:</label>
          <input
            :value="user.code"
            :disabled="!isEditMode"
            @input="updateStudentCode"
            :class="{ disabled: !isEditMode }"
          />
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: Object,
      isEditMode: Boolean,
    },
    methods: {
      updateFirstName(event) {
        this.$emit('update-first-name', event.target.value);
      },
      updateLastName(event) {
        this.$emit('update-last-name', event.target.value);
      },
      updateStudentCode(event) {
        this.$emit('update-student-code', event.target.value);
      },
    },
  };
  </script>
  
  <style scoped>
  .form-row {
    margin: 10px 0;
  }
  
  .disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
  </style>
  