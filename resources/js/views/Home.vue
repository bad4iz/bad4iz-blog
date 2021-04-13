<template>
    <div>
        <MementoMoriWidget/>
        <ReadBooksWidget/>
        <OneLatteRuleWidget/>
        <Stream2Widget />
        <HorsemanWidget />
    </div>
</template>

<script>
import MementoMoriWidget from '@/components/widgets/MementoMori.Widget';
import ReadBooksWidget from '@/components/widgets/ReadBooks.Widget';
import OneLatteRuleWidget from '@/components/widgets/OneLatteRule.Widget';
import Stream2Widget from '@/components/widgets/Stream2.Widget';
import HorsemanWidget from '@/components/widgets/Horseman.Widget';

export default {
    name: 'Home',
    components: {
        MementoMoriWidget,
        ReadBooksWidget,
        OneLatteRuleWidget,
        Stream2Widget,
        HorsemanWidget
    }
};
</script>

<style scoped>

</style>
