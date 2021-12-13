<template>
    <v-card class="my-9">

            <v-card-title>

                    Последние прочитанные книги

            </v-card-title>
        <v-card-text>
            <div class="text-lg-end">

            <h4>Прочитано в этом году {{ booksCountLaterYear }}</h4>
            <h4>Прочитано в этом месяце {{ booksCountLaterMonth }}</h4>
            </div>

            <div class="card__container mt-4">
                <div
                    v-for="book in books"
                    :key="book.id"
                    class="card__item"
                >

                    <VCard
                        class="card__img"
                    >
                        <v-img
                            contain
                            :src="book.img"
                            max-width="150"
                        />

                    </VCard>

                    <div class="grey--text  text-lg-end ms-4">
                        {{ book.date }}
                    </div>

                    <div class="mb-1 text-subtitle-5">
                        {{ book.verdict }}
                    </div>

                </div>
                <div
                    class="card__item"
                >

                    <VCard
                        contain
                        to="/books-read"
                        max-width="150"

                    >
                        <v-img
                            class="white--text align-end"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsun9-8.userapi.com%2Fc841532%2Fv841532431%2F9b9c%2FPuMLU_hRcfY.jpg"
                            max-width="150"
                        >

                        <v-card-title class="all__title" > Все остальные книги...</v-card-title>
                        </v-img>

                    </VCard>


                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'ReadBooksWidget',
    data: () => ({
        books: [],
        booksCountLaterYear: 0,
        booksCountLaterMonth: 0,
    }),
    methods: {
        async getPostsList() {
            const dateNow = new Date();
            const monthYear = dateNow.toLocaleDateString().slice(3);
            const res = await window.axios.get('/api/get-github-file/journal/readBooks.json?');

            const booksLaterYear = res.data?.books?.filter(item => item?.date?.includes(dateNow.getFullYear()));
            this.booksCountLaterYear = booksLaterYear?.length;
            this.booksCountLaterMonth = res.data?.books?.filter(item => item?.date?.includes(monthYear))?.length;
            this.books = booksLaterYear.slice(0, 21);
        },
    },
    mounted() {
        this.getPostsList();
    }
};
</script>

<style scoped lang="scss">
.card {
    &__container {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        align-items: baseline;
    }

    &__item {
        max-width: 150px;
        perspective: 500px;
    }
    &__img {
        transform: rotateY(22deg);
    }
}
.all__title {
    background-color: rgb(26 32 44/52%);
}
</style>
