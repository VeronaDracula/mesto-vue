import { defineStore } from 'pinia';

export const usePopupsStore = defineStore('popups', {
  state: () => ({
    isPopupEditProfileOpen: false,
    isPopupAddPlaceOpen: false,
  }),

  actions: {
    openPopupEditProfile() {
      this.isPopupEditProfileOpen = true;
    },
    closePopupEditProfile() {
      this.isPopupEditProfileOpen = false;
    },
    openPopupAddPlace() {
      this.isPopupAddPlaceOpen = true;
    },
    closePopupAddPlace() {
      this.isPopupAddPlaceOpen = false;
    },
  },
})