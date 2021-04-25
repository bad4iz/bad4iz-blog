<template>
    <div id="editor">
<!--        <textarea :value="input" @input="update"></textarea>-->
        <div v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
import marked from 'marked'

marked.setOptions({
    breaks: true,
});

export default {
    name: 'MarkDownView',
    data: ()=>({
        input: ""
    }),
    mounted() {
        this.getFile('Readme.md')
    },
    computed: {
        compiledMarkdown: function() {
            return marked(this.input, { sanitize: true });
        }
    },
    methods: {
        update: _.debounce(function(e) {
            this.input = e.target.value;
        }, 300),

        async getFile(fileName) {
            const res = await window.axios.get('api/get-github-file/journal/'+ fileName);

            console.log(res)
            this.input = res?.data || '#hello' ;
        }
    }
};
</script>

<style>

</style>
