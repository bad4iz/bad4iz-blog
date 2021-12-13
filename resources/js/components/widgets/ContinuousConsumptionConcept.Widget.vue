<template>
    <v-card class="mt-16 norelative">
        <v-card-title>
            <h2>
                Концепция постоянного потребления на протяжении жизни человека
            </h2>
        </v-card-title>
        <v-card-subtitle class="mt-5">
            <h3> Ваша ежегодная норма потребления {{ pr(summ) }}р. </h3>
            <h3> Сколько надо откладывать в год {{ pr(annualProfit - summ) }}р. </h3>
            <span> * При вашем ежегодном доходе {{ pr(annualProfit) }}р. ,</span>
            <span> рабочем стаже {{ yearsBeforeRetirement }} (лет) </span>
            <span> и планируемой последтрудовой жизни {{ yearsBeforeRetirement }} (лет) </span>
        </v-card-subtitle>
        <D3LineChart :config="chartConfig" :datum="chartData"></D3LineChart>
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
        <v-card-text>
            <p>* расчеты в трудовой деятельности (в каждый год).  формулой: <b> накопления + (накопления * [годовой %]) + [сумма которую надо отложить] </b></p>
            <p>* расчеты после трудовой деятельности (в каждый год). формулой: <b> накопления + (накопления * [годовой %]) - [сумма которую надо потратить] </b></p>
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
        annualProfit: 500000,
        chartData: [],
        chartConfig: {
            values: ['save', 'T', 'sum'],
            date: {
                key: 'year',
                inputFormat: '%Y',
                outputFormat: '%Y',
            },
            transition: {
                ease: 'easeBounceOut',
                duration: 100,
            },
            margin: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 90,
            },
            tooltip: {labels: ['Копим', 'Осталось', 'Наше постоянное потребление']},
            axis: {
                yFormat: '.1s',
                yTitle: 'Накоплено денег',
            },
            color: {
                scheme: ['#55D6BE', '#e50f7c', '#0838e5'],
            },
        },
    }),
    methods: {
        pr(v) {
            const value = v.toFixed(0);
            return [...value].reverse().map((a, idx) => (idx + 1) % 3 === 0 ? ' ' + a : a).reverse().join('');
        },
        chartDataClear() {
            while (this.chartData.length) {
                this.chartData.pop();
            }

        },
        getFutureAnnuity(n) {
            const r = Number(this.r);
            return ((1 + r) ** Number(n) - 1) / r;
        },
        getAnnuity(n) {
            const r = Number(this.r);
            return Math.abs(1 - (1 / ((1 + r) ** (n)))) / r;
        }
    },
    computed: {
        r() {
            return +this.proc / 100;
        },
        futureAnnuity() {
            return this.getFutureAnnuity(this.yearsBeforeRetirement);
        },
        annuity() {
            return this.getAnnuity(this.yearsAfterRetirement);// Math.abs(1 - (1 / ((1 + this.r) ** this.yearsAfterRetirement))) / this.r;
        },
        summ() {
            this.chartDataClear();
            const sum = (this.annualProfit * this.futureAnnuity) / (this.annuity + +this.futureAnnuity);

            // до пенсии
            for (let i = 0; i <= this.yearsBeforeRetirement; i++) {
                this.chartData.push({
                    save: Math.floor((this.annualProfit - sum) * this.getFutureAnnuity(i)) || 0,
                    // total: this.annualProfit * this.getFutureAnnuity(i) || 0,
                    T: 0,
                    sum: Math.floor(sum),
                    year: i,
                });
            }
            // после пенсии
            const a = this.yearsAfterRetirement + this.yearsBeforeRetirement;
            for (let i = this.yearsBeforeRetirement; i <= a; i++) {
                this.chartData.push({
                    T: Math.floor(sum * this.getAnnuity(a - i)) || 0,
                    // total: this.annualProfit * this.getFutureAnnuity(i) || 0,
                    sum: Math.floor(sum),
                    save: 0,
                    year: i,
                });
            }
            return sum;
        }
    },
    components: {
        D3LineChart,
    },
};
</script>

<style scoped>
.norelative {
    position: unset;
}
</style>
