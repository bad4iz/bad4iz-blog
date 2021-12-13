<template>
    <div class="cont">
        <MementoMoriWidget />
        <ABCOfFinanceWidget/>
        <OneLatteRuleWidget/>
        <ReadBooksWidget/>
        <ContinuousConsumptionConceptWidget/>
<!--        <Stream2Widget />-->
<!--        <HorsemanWidget />-->

    </div>
</template>

<script>
import MementoMoriWidget from '@/components/widgets/MementoMori.Widget';
import ContinuousConsumptionConceptWidget from '@/components/widgets/ContinuousConsumptionConcept.Widget';
import ReadBooksWidget from '@/components/widgets/ReadBooks.Widget';
import OneLatteRuleWidget from '@/components/widgets/OneLatteRule.Widget';
import Stream2Widget from '@/components/widgets/Stream2.Widget';
import HorsemanWidget from '@/components/widgets/Horseman.Widget';
import ABCOfFinanceWidget from '@/components/widgets/ABCOfFinance.Widget';

export default {
    name: 'Home',
    components: {
        MementoMoriWidget,
        ContinuousConsumptionConceptWidget,
        ReadBooksWidget,
        OneLatteRuleWidget,
        Stream2Widget,
        HorsemanWidget,
        ABCOfFinanceWidget
    }
};
</script>

<style scoped>
.cont {
    margin-bottom: 600px;
}
</style>
