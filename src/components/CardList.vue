<script setup>
import { storeToRefs } from 'pinia'
import Card from './Card.vue';
import { useGalleryStore } from '@/stores/gallery.js';

const galleryStore = useGalleryStore();
const { cards } = storeToRefs(galleryStore);

</script>

<template>
    <section class="gallery">
        <ul class="cards">
            <Card v-for="card in cards" :key="card.id" :card="card" />

        </ul>
    </section>
</template>

<style lang="scss" scoped>
.gallery {
    padding-top: 47px;
}

.cards {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(282px, 1fr));
    justify-items: center;
    gap: 17px;
}
</style>