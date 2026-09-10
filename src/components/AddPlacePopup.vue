<script setup>
import { ref } from 'vue';
import { usePopupsStore } from '@/stores/popups.js';
import { useGalleryStore } from '@/stores/gallery.js';

const popupsStore = usePopupsStore();
const galleryStore = useGalleryStore();

const newCardData = ref({
    id: Date.now(),
    link: '',
    title: '',
    likes: []
})

function saveCard() {

    galleryStore.addCard(newCardData.value);

    // galleryStore.cards.push(newCardData.value);
    popupsStore.closePopupAddPlace();
}

</script>

<template>
    <section class="popup" :class="{ opened: popupsStore.isPopupAddPlaceOpen }">
        <div class="popup__container">
            <button class="popup__close page__button" @click="popupsStore.closePopupAddPlace()"></button>
            <div class="popup__content">
                <h2 class="popup__title">Редактировать профиль</h2>
                <form class="form">
                    <div class="form__section">
                        <label htmlFor="photo-name" class="form__label"></label>
                        <input type="text" class="form__item" id="photo-name" name="name" placeholder="Название"
                            required v-model="newCardData.title"/>
                        <span class="form__input-error" id="photo-name-error"></span>
                    </div>
                    <div class="form__section">
                        <label htmlFor="link" class="form__label"></label>
                        <input type="url" class="form__item" id="link" name="link" placeholder="Ссылка на картинку"
                            required v-model="newCardData.link"/>
                        <span class="form__input-error" id="link-error"></span>
                    </div>

                    <button class="form__save" @click.prevent="saveCard()" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;

    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 1s, opacity 0.5s linear;

    &:hover {
        cursor: pointer;
    }

    &.opened {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s, opacity 0.5s linear;
    }
}

.popup__container {
    max-width: 282px;
    width: 100%;
    background: #FFF;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    position: relative;
}

.popup__close {
    position: absolute;
    height: 26px;
    width: 26px;
    top: -45px;
    right: 5px;
    background: transparent center no-repeat url("../assets/images/close-icon.svg");
    background-size: auto;
    border: none;
}

.popup__content {
    padding: 27px 22px 25px 22px;
}

.popup__title {
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 1.22;
    color: #000;
    margin: 0 0 47px 0;
}

.form__section {
    position: relative;
}

.form__item {
    border: 0;
    width: 238px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.22;
    color: #000000;
    margin-top: 35px;

    &:focus {
        outline-color: rgba(0, 0, 0, 0.2);
    }
}

.form__input-error {
    position: absolute;
    left: 0;
    top: calc(100% + 5px);

    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #FF0000;

    opacity: 0;
    transition: opacity 0.3s;

    &.active {
        opacity: 1;
    }
}

.form__save {
    width: 238px;
    height: 46px;
    background: #000000;
    border-radius: 2px;
    margin-top: 45px;
    border: none;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.2;
    text-align: center;
    color: #FFF;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
}


@media screen and (min-width: 1024px) {
    .popup__container {
        max-width: 430px;
    }

    .popup__close {
        height: 40px;
        width: 40px;
        right: -40px;
        background: transparent center no-repeat url("../assets/images/close-icon-desktop.svg");
    }

    .popup__content {
        padding: 34px 36px 37px 36px;
    }

    .form__item {
        width: 358px;
    }

    .form__save {
        width: 358px;
        height: 50px;
        font-size: 18px;
        line-height: 1.22;
    }
}
</style>
