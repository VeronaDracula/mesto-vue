<script setup>
defineProps({
    // msg: {
    //     type: String,
    //     required: true,
    // },
})
</script>

<template>
    <header class="header">
        <img class="header__logo" src="../assets/images/logo.svg" alt="логотип" />
    </header>
</template>

<style scoped>
.header {
    padding-top: 20px;
    border-bottom: 1px solid rgba(84, 84, 84, 0.7);
    min-height: 56px;
}

.header__logo {
    width: 104px;
    height: auto;
    padding-left: 27px;
    padding-bottom: 27px;
}

@media screen and (min-width: 1024px) {
    .header {
        padding-top: 44px;
    }

    .header__logo {
        width: 142px;
        padding-left: 0;
        align-self: flex-start;
        padding-bottom: 20px;
    }
}
</style>
