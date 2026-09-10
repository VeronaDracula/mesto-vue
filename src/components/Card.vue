<script setup>
import { ref } from 'vue';
import { useGalleryStore } from '@/stores/gallery.js';
import { useDataStore } from '@/stores/userData.js';

const props = defineProps({
    card: {
        type: Object,
        required: true,
    },
})

const galleryStore = useGalleryStore();
const userDataStore = useDataStore();

const cardLikes = ref([...props.card.likes])

function removeCard() {
    galleryStore.removeCard(props.card.id);
}

function addLike() {
    cardLikes.value.push(userDataStore.id);
    galleryStore.changeLikes(props.card.id, cardLikes.value);
}

function removeLike() {
    cardLikes.value = cardLikes.value.filter(like => like !== userDataStore.id);
    galleryStore.changeLikes(props.card.id, cardLikes.value);
}

function clickLike() {
    if (cardLikes.value.includes(userDataStore.id)) {
        removeLike();
    } else {
        addLike();
    }
}


</script>

<template>
    <li class="card">
        <button class="card__delete" type="button" @click="removeCard()"></button>
        <div class="card__image-box">
            <img class="card__image" alt="" :src="card.link" />
        </div>
        <div class="card__image-info">
            <h2 class="card__title">{{ card.title }}</h2>
            <div class="card__like-box">
                <button class="card__like" :class="{ 'card__like_active': card.likes.length > 0 }" type="button"
                    @click="clickLike"></button>
                <p class="card__like-amount">{{ card.likes.length }}</p>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>
.card {
    padding: 0;
    margin: 3px 0 0 0;
    background: #FFFFFF;
    border-radius: 10px;
    width: 282px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.card__image-box {
    width: 282px;
    height: 282px;
    border-radius: 10px 10px 0 0;
}

.card__image {
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    object-fit: cover;

    &:hover {
        cursor: pointer;
    }
}

.card__image-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 246px;
    padding: 25px 20px 25px 21px;
}

.card__title {
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin: 0;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.card__like-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card__like {
    height: 19px;
    min-width: 22px;
    background: transparent center url("../assets/images/like.svg");
    background-size: auto;
    border: none;
    margin-bottom: 3px;

    &_active {
        background: transparent center url("../assets/images/like-active.svg");
        opacity: 1;
    }

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
}

.card__like-amount {
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
    margin: 0;
}

.card__delete {
    height: 20px;
    min-width: 18px;
    background: transparent center url("../assets/images/delete.svg");
    background-size: auto;
    border: none;
    position: absolute;
    z-index: 1;
    top: 18px;
    right: 15px;

    &_visible {
        display: block;
    }

    &_invisible {
        display: none;
    }
}
</style>