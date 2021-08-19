<template>
    <v-card class="my-9">
        <v-img
            height="200px"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsun9-8.userapi.com%2Fc841532%2Fv841532431%2F9b9c%2FPuMLU_hRcfY.jpg&f=1&nofb=1"
        >

            <v-card-title class="white--text mt-8">
                <v-avatar size="56">
                    <img
                        alt="user"
                        src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                    >
                </v-avatar>
                <p class="ml-3">
                    Последние прочитанные книги
                </p>
            </v-card-title>
        </v-img>

        <v-card-text>
            <v-timeline>

                <v-timeline-item
                    v-for="book in books"
                    :key="book.id"
                    color="green"
                >
                    <template v-slot:opposite>
                                <span
                                    class="headline font-weight-bold ${year.color}--text"
                                    v-text="book.date"
                                ></span>
                    </template>
                    <v-card>
                        <div class="d-flex flex-no-wrap ">

                            <v-img
                                class="ma-2"
                                max-height="150"
                                max-width="150"
                                contain
                                :src="book.img"/>
                            <div>

                                <v-card-title
                                    class="text-h5"
                                    v-text="book.name"
                                />

                                <v-card-subtitle v-text="book.author"/>
                                <v-card-subtitle v-text="book.verdict"/>
                            </div>
                        </div>
                        <v-card-actions>
                            <v-btn
                                v-if="book.litres"
                                class="ml-auto"
                                text
                                color="orange"
                                target="_blank"
                                :href="book.litres"
                            >litres</v-btn>
                            <v-btn
                                v-if="book.livelib"
                                plain
                                color="blue"
                                target="_blank"
                                :href="book.livelib"
                            >livelib</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-timeline-item>

            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script>

export default {
    name: 'BooksReadView',
    data: () => ({
        books: [],
        messages: [],
    }),
    methods: {
        async getPostsList() {
            const res = await window.axios.get('/api/get-github-file/journal/readBooks.json');
            this.books = res.data.books;
        },
    },
    mounted() {
        this.getPostsList();
    }
};
</script>

<style scoped>

</style>
