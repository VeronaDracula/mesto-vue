<script setup>
import Header from './components/Header.vue';
import Profile from './components/Profile.vue';
import CardList from './components/CardList.vue';
import Footer from './components/Footer.vue';
import EditProfilePopup from './components/EditProfilePopup.vue';
import AddPlacePopup from './components/AddPlacePopup.vue';

import { ref } from 'vue';

</script>

<template>
  <div class="app">
    <Header />
    <main>
      <Profile />
      <CardList/>

    </main>
    <Footer />

    <EditProfilePopup />
    <AddPlacePopup />
  </div>
</template>

<style scoped></style>
