import { defineStore } from 'pinia';
import songsData from './assets/song-list.json'; 

export const useGlobalStore = () => {
  return defineStore('global', {
    state: () => ({
      all_songs: songsData, 
      user: {
        firstName: 'name',
        lastName: 'surname',
        studentCode: 'CODE1234',
        loggedInAt: [], 
        isLoggedIn: false,
      },
    }),

    getters: {
      isUserLoggedIn(state) {
        return state.user.isLoggedIn;
      },
    },

    actions: {
      loginUser() {
        this.user.isLoggedIn = true;
        const timestamp = new Date().toLocaleString('en-US', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
        this.user.loggedInAt.push(timestamp);
      },

      resetUser() {
        this.user.firstName = 'name';
        this.user.lastName = 'surname';
        this.user.studentCode = 'CODE1234';
        this.user.loggedInAt = [];
        this.user.isLoggedIn = false;
      },
    },
  });
};
