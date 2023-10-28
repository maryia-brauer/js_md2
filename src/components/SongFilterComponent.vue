<template>
    <div class="song-filter">
      <button
        @click="setFilter('none')"
        :class="{ active: activeFilter === 'none' }"
      >
        None
      </button>
      <button
        @click="setFilter('name')"
        :class="{ active: activeFilter === 'name' }"
      >
        Name
      </button>
      <button
        @click="setFilter('artist')"
        :class="{ active: activeFilter === 'artist' }"
      >
        Artist
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeFilter: 'none', // Default filter
      };
    },
    methods: {
      setFilter(filter) {
        this.activeFilter = filter;
        this.$emit('filter-change', filter); // Emit an event to notify the parent component
      },
    },
  };
  </script>
  
  <style scoped>
  .song-filter {
    display: flex;
    justify-content: space-between;
  }
  
  button {
    background-color: #9040f1;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 5px;
  }
  
  button.active {
    background-color: purple;
  }
  </style> 
  