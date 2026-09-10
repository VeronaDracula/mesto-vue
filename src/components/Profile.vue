<script setup>
import { usePopupsStore } from '@/stores/popups.js';
import { useDataStore } from '@/stores/userData.js';

defineProps({

})

const popupsStore = usePopupsStore();
const formStore = useDataStore();


</script>

<template>
    <section class="profile">
        <div class="profile__info">
            <div class="profile__avatar-box">
                <img class="profile__avatar" alt="аватар" src="../assets/images/owl5.jpg" />
            </div>
            <div class="profile__text">
                <div class="profile__name-edit">
                    <h1 class="profile__name">{{ formStore.name }}</h1>
                    <button class="profile__edit-button" type="button"
                        @click="popupsStore.openPopupEditProfile()"></button>
                </div>
                <p class="profile__about">{{ formStore.about }}</p>
            </div>
        </div>
        <button class="profile__add-button" type="button" @click="popupsStore.openPopupAddPlace()"></button>
    </section>
</template>

<style lang="scss" scoped>
.profile {
    padding-top: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile__info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile__name {
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 10px 0 26px;
    text-overflow: ellipsis;
    max-width: 189px;
    overflow: hidden;
    white-space: nowrap;
}

.profile__name-edit {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
}

.profile__avatar-box {
    position: relative;
    width: 120px;
    height: 120px;
    margin: 0 0 23px 0;

    // &:hover {
    //     .profile__avatar-hover {
    //         display: flex;
    //     }
    // }
}

.profile__avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
}

// .profile__avatar-hover {
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     justify-content: center;
//     align-items: center;
//     background: rgba(0, 0, 0, 0.8);
//     border-radius: 50%;
//     display: none;

//     &:hover {
//         cursor: pointer;
//         display: flex;
//     }
// }

.profile__about {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 30px 0;
    text-align: center;
    text-overflow: ellipsis;
    max-width: 282px;
    overflow: hidden;
    white-space: nowrap;
}

// .profile__edit-avatar-button {
//     width: 26px;
//     height: 26px;
//     background: transparent center url("../assets/images/edit-icon.svg");
//     background-size: auto;
//     border: none;

//     &:hover {
//         cursor: pointer;
//     }
// }

.profile__edit-button {
    border: none;
    width: 18px;
    height: 18px;
    padding: 0;
    background: transparent center url("../assets/images/edit-btn.svg");
    background-size: auto;

    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
}

.profile__add-button {
    width: 282px;
    height: 50px;

    background: transparent center url("../assets/images/add-btn.svg");
    background-size: auto;
    border: none;

    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
}

@media screen and (min-width: 1024px) {
    .profile {
        padding-top: 40px;
        max-width: 880px;
        flex-direction: row;
        justify-content: space-between;
    }

    .profile__info {
        flex-direction: row;
    }

    .profile__name {
        font-size: 42px;
        line-height: 1.14;
        margin: 0 20px 0 0;
        max-width: 294px;
    }

    .profile__name-edit {
        margin-bottom: 9px;
    }

    .profile__avatar-box {
        margin: 0 29px 0 0;
    }

    .profile__about {
        font-size: 18px;
        line-height: 1.22;
        margin: 0;
        text-align: left;
        max-width: 336px;
    }

    .profile__edit-button {
        width: 24px;
        height: 24px;
        background: transparent center url("../assets/images/edit-btn-desktop.svg");
    }

    .profile__add-button {
        background: transparent center url("../assets/images/add-btn-desktop.svg");
        width: 150px;
    }
}
</style>
