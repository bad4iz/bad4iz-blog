<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script>
import marked from 'marked'

marked.setOptions({
    breaks: true,
});

export default {
    name: 'MarkDownFile',
    data: ()=>({
        input: ""
    }),
    props: ['fileName'],
    mounted() {
        this.getFile(this.fileName)
    },
    computed: {
        compiledMarkdown: function() {
            return marked(this.input);
        }
    },
    methods: {
        async getFile(fileName) {
            const res = await window.axios.get('/api/get-github-file/journal/'+ fileName + '.md');

            console.log(res)
            this.input = res?.data || '#hello' ;
        }
    }
};
</script>

<style scoped>

</style>
