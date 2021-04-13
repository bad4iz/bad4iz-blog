<template>
    <MarkDownFile :fileName="fileName"></MarkDownFile>
</template>

<script>
import MarkDownFile from '@/components/MarkDownFile';
import {camelCase} from 'lodash'
export default {
    name: 'PostsJournalView',
    components: {
        MarkDownFile
    },
    computed: {
        fileName(){
            return camelCase(this.$route.params.fileName);
        }
    }
};
</script>

<style scoped>

</style>
