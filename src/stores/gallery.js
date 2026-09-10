import { defineStore } from 'pinia';

export const useGalleryStore = defineStore('gallery', {
    state: () => ({
        cards: [
            {
                id: 1,
                link: 'https://bipbap.ru/wp-content/uploads/2017/06/1366818022_krasivye-mesta-3.jpg',
                title: "Водопад",
                likes: [1, 2]
            },
            {
                id: 2,
                link: 'https://previews.123rf.com/images/kotenko/kotenko1304/kotenko130400145/18909195-sunny-landscape-with-flowers-in-a-field.jpg',
                title: "Поле",
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