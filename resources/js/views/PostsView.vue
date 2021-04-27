<template>
    <v-main>
        <h1 class="text-center">Записки натуралиста</h1>
        <Post
            v-for="(post, i) in items"
            :key="i"
            :post="post"
        >
            <v-container v-if="post.children">
                <Post
                    v-for="(postChild, i) in post.children"
                    :key="i"
                    :post="postChild"
                />
            </v-container>
        </Post>



    </v-main>
</template>

<!--// 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 -->
<script>
import Post from '@/components/Post';

export default {
    name: 'PostsView',
    data: () => ({
        selectedItem: 1,
        items: [],
    }),
    components: {Post},
    methods: {
        async getPostsList() {
            const res = await window.axios.get('/api/get-github-file/journal/posts.json');
            this.items = res.data.posts
        },
    },
    mounted() {
        this.getPostsList();
    }
};
</script>

<style scoped>

</style>
