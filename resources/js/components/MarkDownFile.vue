<template>
  <div  v-if="compiledMarkdown" v-html="compiledMarkdown" class="markdown-body"></div>
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

            this.input = res?.data || '#hello' ;
        }
    }
};
</script>

<style>

blockquote {
    margin: 0;
    margin-top: 0;
    margin-bottom: 16px;
    padding: 0 1em;
    color: #6a737d;
    border-left: .25em solid #dfe2e5;
}
.markdown-body {
    font-size: 18px;
}
.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
}

.markdown-body h1, .markdown-body h2 {
    padding-bottom: .3em;
    border-bottom: 1px solid #eaecef;
}
.markdown-body h1 {
    font-size: 2em;
}
.markdown-body h2 {
    font-size: 1.5em;
}

</style>
