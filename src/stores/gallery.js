import { defineStore } from 'pinia';

export const useGalleryStore = defineStore('gallery', {
    state: () => ({
        cards: [
            {
                id: 1,
                link: 'src/assets/images/owl5.jpg',
                title: "Название",
                likes: [1, 2]
            },
            {
                id: 2,
                link: 'src/assets/images/owl3.jpg',
                title: "Сова",
                likes: [2]
            }
        ],
    }),
    actions: {
        addCard(card) {
            this.cards.push(card);
        },

        removeCard(idCard) {
            this.cards = this.cards.filter(card => card.id !== idCard);
        },

        changeLikes(idCard, likes) {
            const card = this.cards.find((i) => i.id === idCard);
            if (card) card.likes = likes;
        }
    },
})