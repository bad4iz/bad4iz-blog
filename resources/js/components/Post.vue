<template>
    <v-card
        max-width="900"
        class="my-3 mx-auto"
        outlined
    >
        <v-card-title>
            <v-badge
                v-if="isNew"
                color="green"
                content="new"
            >
                <h2>
                {{ post.title }}
                </h2>
            </v-badge>
            <span v-else>
                 <h2>
                {{ post.title }}
                 </h2>
            </span>

        </v-card-title>
        <v-card-text>
            {{ post.text }}
            <slot>            </slot>
        </v-card-text>
        <v-card-actions class="flex justify-end"  v-if="post.path">
            <v-btn
                class="ml-auto"
                outlined
                color="primary"
                :to="`/post/journal/${post.path}`"
            >
                Почитать
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { request } from '@octokit/request';
import __camelCase from 'lodash/camelCase';
import { DateTime } from 'luxon';

export default {
    name: 'Post',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data: () => ({
        committedDate: 'null',
    }),
    computed: {
        isNew() {
            if(!this.post.path) {
                return false;
            }
            const dateTimeLocalStorage = localStorage.getItem(this.post.path);
            if(!dateTimeLocalStorage) {
                return true;
            }
            let gitHubDate = DateTime.fromISO(this.committedDate);
            let localDate = DateTime.fromISO(dateTimeLocalStorage);
            return localDate < gitHubDate;
        }
    },
    methods: {
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

            const date = nodes[0];
            this.committedDate = date?.committedDate;
        }
    },
    mounted() {
        this.find(__camelCase(this.post.path) + '.md');
    }

};
</script>

<style scoped>

</style>
