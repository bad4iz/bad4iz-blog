<template>
    <div>
        <MementoMori/>
        <ReadBooks/>
        <OneLatteRule/>
    </div>
</template>

<script>
import MementoMori from '@/components/widgets/MementoMori';
import ReadBooks from '@/components/widgets/ReadBooks';
import OneLatteRule from '@/components/widgets/OneLatteRule';

export default {
    name: 'Home',
    components: {
        MementoMori,
        ReadBooks,
        OneLatteRule
    }
};
</script>

<style scoped>

</style>
