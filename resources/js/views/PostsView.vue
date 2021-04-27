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
                <v-badge
                    v-if="isNew(item.path, item.committedDate)"
                    color="green"
                    content="new"
                    
                >
                    {{ item.title }}
                </v-badge>
                <span v-else>
                {{ item.title }}
                </span>
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
                            <v-badge
                                v-if="isNew(child.path, child.committedDate)"
                                color="green"
                                content="new"
                            >
                                {{ child.title }}
                            </v-badge>
                            <span v-else>
                                {{ child.title }}
                            </span>
                        </v-card-title>
                        <v-card-text>
                            {{ child.text }}
                        </v-card-text>
                        <v-card-actions class="flex justify-end">
                            <v-btn
                                class="ml-auto"
                                outlined
                                color="primary"
                                :to="`/post/journal/${child.path}`"
                            >
                                Почитать
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
            </v-card-text>
            <v-card-actions v-if="item.path" class="flex justify-end">
                <v-btn
                    class="ml-auto"
                    outlined
                    color="primary"
                    :to="`/post/journal/${item.path}`"
                >
                    Почитать
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-content>
</template>

<!--// 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 -->
<script>
import { request } from '@octokit/request';
import { DateTime } from 'luxon';


export default {
    name: 'PostsView',
    data: () => ({
        selectedItem: 1,
        items: [],
    }),
    methods: {
        isNew(path, committedDate) {
            if(!path) {
                return false;
            }
            const dateTimeLocalStorage = localStorage.getItem(path)
            if(!dateTimeLocalStorage){
                return true
            }

            let gitHubDate = DateTime.fromISO(committedDate)
            let localDate = DateTime.fromISO(dateTimeLocalStorage)

            return  localDate < gitHubDate;

        },
        async getPostsList() {
            const res = await window.axios.get('/api/get-github-file/journal/posts.json');
            // this.items = res.data.posts
            this.items = await this.jopa(res.data.posts);

        },
        async getTimeCommittedDate(path, parent) {
            const items = [...this.items];
            const req = await this.find(path);
            const newPosts = items.map(post => {
                if(path === post.path) {
                    post.committedDate = req?.committedDate;
                }
                return post;
            });

            this.items = newPosts;

        },
        async jopa(posts) {
            const asyncRes = await Promise.all(posts.map(async (post) => {
                if(post.path) {
                    const {committedDate} = await this.find(post.path + '.md');
                    return {...post, committedDate};
                }
                return post;
            }));

            return asyncRes;
        },
        async find(path) {
            const req = await request('POST /graphql', {
                headers: {
                    authorization: 'token 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',
                },
                query: `query ($path: String!) {
                   repository(name: "journal", owner: "bad4iz") {
                    info: ref(qualifiedName: "master") {
                      target {
                        ... on Commit {
                          history(path: $path) {
                            nodes {
                              committedDate
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
            const nodes = req?.data?.data?.repository?.info?.target?.history?.nodes;
            return nodes[0];
        }
    },
    mounted() {
        this.getPostsList();
    }
};
</script>

<style scoped>

</style>
