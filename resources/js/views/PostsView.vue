<template>
    <v-content>
        <h1 class="text-center">Записки натуралиста</h1>
        <v-card
            max-width="900"
            v-for="(item, i) in items"
            :key="i"
            flat
            class="mx-auto"
        >
            <v-card-title>
                {{ item.title }}
            </v-card-title>
            <v-card-text>
                {{ item.text }}
                <v-container v-if="item.children">
                    <v-card
                        class=""
                        v-for="(child, i) in item.children"
                        :key="i"
                        flat
                    >
                        <v-card-title>
                            {{ child.title }}
                        </v-card-title>
                        <v-card-text>
                            {{ child.text }}
                        </v-card-text>
                        <v-card-action class="flex justify-end">
                            <v-btn
                                class="ml-auto"
                                outlined
                                color="primary"
                                :to="`/post/journal/${child.path}`"
                            >
                                Почитать
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </v-container>
            </v-card-text>
            <v-card-action v-if="item.path" class="flex justify-end">
                <v-btn
                    class="ml-auto"
                    outlined
                    color="primary"
                    :to="`/post/journal/${item.path}`"
                >
                    Почитать
                </v-btn>
            </v-card-action>
        </v-card>
    </v-content>
</template>

<!--// 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 -->
<script>
import {request } from '@octokit/request'
// const octokit = new window.Octokit({ auth: `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` });

export default {
    name: 'PostsView',
    data: () => ({
        selectedItem: 1,
        items: [],
    }),
    methods: {
        async getPostsList() {
            const res = await window.axios.get('/api/get-github-file/journal/posts.json');
            this.items = res.data.posts
        },
        async jopa(path) {
            const result = await request("POST /graphql", {
                headers: {
                    authorization: "token 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",
                },
                query: `query ($path: String!) {
                   repository(name: "journal", owner: "bad4iz") {
                    info: ref(qualifiedName: "master") {
                      target {
                        ... on Commit {
                          history(path: $path) {
                            nodes {
                              message
                              pushedDate
                              committedDate
                              authoredDate
                            }
                          }
                        }
                      }
                    }
                  }
                  }`,
                variables: {
                    path,
                },
            });
            console.log(`${result.data.length} repos found.`);
            // const a = await octokit.request('GET /repos/bad4iz/journal/contents/horseman.md', {
            //     owner: 'bad4iz',
            //     repo: 'journal',
            //     path: 'path'
            // })
            // console.log(a);
        }
    },
    mounted() {
        this.jopa('steam20.md')
        this.getPostsList();
    }
};
</script>

<style scoped>

</style>
