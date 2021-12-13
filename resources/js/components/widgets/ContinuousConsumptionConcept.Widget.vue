<template>
    <v-card class="mt-16" >
        <h1> Концепция постоянного потребления на протяжении жизни человека </h1>

        <h3> Сколько можно тратить в год {{pr(summ)}} </h3>
        <h3> Сколько надо откладывать в год {{ pr(annualProfit - summ) }} </h3>
<!--        <D3LineChart :config="chartConfig" :datum="chartData"></D3LineChart>-->
        <v-card-text>
            <div>
                <v-text-field
                    label="Годовая прибыль"
                    type="number"
                    v-model="annualProfit"
                ></v-text-field>
                <v-slider
                    v-model="proc"
                    :label="`процентная ставка: ${proc}`"
                    min="1"
                    max="60"
                ></v-slider>
                <v-slider
                    v-model="yearsBeforeRetirement"
                    :label="`Количество лет до пенсии: ${yearsBeforeRetirement}`"
                    min="1"
                    max="60"
                ></v-slider>
                <v-slider
                    v-model="yearsAfterRetirement"
                    :label="`Количество лет после пенсии: ${yearsAfterRetirement}`"
                    min="1"
                    max="60"
                ></v-slider>

            </div>
        </v-card-text>
    </v-card>
</template>

<script>
import { D3LineChart } from 'vue-d3-charts';

export default {
    name: 'ContinuousConsumptionConceptWidget',
    data: () => ({
        yearsBeforeRetirement: 25,
        yearsAfterRetirement: 20,
        proc: 7,
        annualProfit: 1000000,
        chartData: [],
        chartConfig: {
            values: ['FV'],
            date: {
                key: 'year',
                inputFormat: '%Y',
                outputFormat: '%Y',
            },
            transition: {
                ease: 'easeBounceOut',
                duration: 100,
            },
            axis: {
                yFormat: '.1s',
                yTitle: 'Накоплено денег',
            },
            margin: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 70,
            },
        },
    }),
    methods: {
        pr(v) {
            const value =  v.toFixed(0);
            return [...value].reverse().map((a, idx)=> (idx+1) % 3 === 0 ? ' ' + a : a).reverse().join('');
        }

    },
    computed: {
        r() {
          return +this.proc/100
        },
        futureAnnuity() {
            return ( (1+ Number(this.r))**Number(this.yearsBeforeRetirement) - 1  ) / this.r;
        },
        annuity() {
            return Math.abs(1 - (1 / ((1 + this.r) ** this.yearsAfterRetirement))) / this.r;
        },
        summ() {
          return (this.annualProfit * this.futureAnnuity) / (this.annuity + +this.futureAnnuity )
      }
    },
    components: {
        D3LineChart,
    },
};
</script>

<style scoped lang="sass">

</style>
