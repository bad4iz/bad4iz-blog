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
                <ApolloQuery :query="LastBookReadingProgress">
                    <template
                        slot-scope="{ result: { data: {lastBookReadingProgress : {data} = {}} = {}, loading }, isLoading }">
                        <div v-if="isLoading">Loading...</div>

                        <v-timeline-item
                            v-else
                            v-for="item in data"
                            :key="item.id"
                            color="green"
                        >
                            <template v-slot:opposite>
                                <span
                                    class="headline font-weight-bold ${year.color}--text"
                                    v-text="item.date"
                                ></span>
                            </template>
                            <v-card

                            >
                                <div class="d-flex flex-no-wrap ">

                                        <v-img
                                            class="ma-2"
                                            max-height="150"
                                            max-width="150"
                                            contain
                                            :src="item.book.img"/>
                                    <div>

                                <v-card-title
                                    class="text-h5"
                                    v-text="item.book.name"
                                />

                                <v-card-subtitle v-text="item.book.author"/>
                                        <v-card-subtitle v-text="item.verdict"/>

<!--                                        <v-card-actions>-->

<!--                                            <v-btn-->
<!--                                                class="ml-2 mt-5"-->
<!--                                                outlined-->
<!--                                                small-->
<!--                                            >-->
<!--                                                START RADIO-->
<!--                                            </v-btn>-->
<!--                                        </v-card-actions>-->
                                    </div>
<!--                                    <div class="ma-3">-->
<!--                                       {{ item.book.description}}-->
<!--                                    </div>-->

                                </div>
                            </v-card>
                        </v-timeline-item>
                    </template>
                </ApolloQuery>

            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script>
import LastBookReadingProgress from '@/graphql/queries/LastBookReadingProgress.gql';

export default {
    name: 'ReadBooks',
    data: () => ({
        LastBookReadingProgress,
        messages: [
            {
                from: 'You',
                message: `Sure, I'll see you later.`,
                time: '10:42am',
                color: 'deep-purple lighten-1',
            },
            {
                from: 'John Doe',
                message: 'Yeah, sure. Does 1:00pm work?',
                time: '10:37am',
                color: 'green',
            },
            {
                from: 'You',
                message: 'Did you still want to grab lunch today?',
                time: '9:47am',
                color: 'deep-purple lighten-1',
            },
        ],
    }),
};
</script>

<style scoped>

</style>
