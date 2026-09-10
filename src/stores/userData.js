import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useDataStore = defineStore('userData', {
  state: () => ({
    id: 234,
    name: 'Имя',
    about: 'О себе',
  }),
  actions: {
    saveForm(data) {
      this.name = data.name
      this.about = data.about
    },
  },
})