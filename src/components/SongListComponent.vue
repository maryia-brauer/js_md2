<template>
  <div class="song-list">
    <h2>Song List</h2>
    <song-filter @filter-change="updateFilter"></song-filter>
    <table>
      <thead>
        <tr>
          <th @click="setActiveColumn('song')" :class="{ active: activeColumn === 'song' }">Name</th>
          <th @click="setActiveColumn('artist')" :class="{ active: activeColumn === 'artist' }">Artist</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="song in sortedSongs" :key="song.song">
          <td>{{ song.song }}</td>
          <td>{{ song.artist }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>  
import SongFilter from './SongFilterComponent.vue';
import songs from '../assets/song-list.json';

export default {
  components: {
    SongFilter, 
  },
  data() {
    return {
      activeColumn: 'name', 
      all_songs: songs, 
    };
  },
  computed: {
    sortedSongs() {
      const songsCopy = [...this.all_songs]; 
      if (this.activeColumn === 'name') {
        return songsCopy.sort((a, b) => a.song.localeCompare(b.song));
      } else if (this.activeColumn === 'artist') {
        return songsCopy.sort((a, b) => a.artist.localeCompare(b.artist));
      }
      return songsCopy;
    },
  },
  methods: {
    setActiveColumn(column) {
      this.activeColumn = column;
    },
    updateFilter(filter) {
      this.setActiveColumn(filter);
    },
  },
};
</script>

<style scoped>
.song-list {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th.active {
  background-color: purple;
  color: white;
  cursor: pointer;
}
</style>
