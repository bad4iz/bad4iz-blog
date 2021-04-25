<template>
    <v-icon>{{ path }}</v-icon>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import * as icons from '@mdi/js';

export default {
    name: 'Icon',
    components: {
        SvgIcon
    },
    props: {
        name: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            path: icons[this.name],
        };
    }
};
</script>

<style scoped>

</style>
