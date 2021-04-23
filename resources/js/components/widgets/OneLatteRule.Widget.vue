<template>
    <v-card class="mt-16" flat>

        <v-card-title>
            <h2>Правило одного Латте</h2>
        </v-card-title>

        <v-card-text>

            <div class="flex justify-space-around flex-wrap">
                    <v-card
                        class="latte__card m-1" width="400px"
                    >
                        <v-img
                            class="white--text align-end"
                            height="250px"
                            src="/img/latte.jpg"
                        >
                            <v-card-title class="bg-white bg-opacity-25 text-gray-900 ">Правило одного Латте</v-card-title>
                        </v-img>

                        <v-card-subtitle
                        ><h3>
                            Кофе за {{ A }} рублей обойдется тебе
                            <span style="white-space: nowrap"
                            >{{ moneyFormat(FV) }} рублей</span
                            >
                        </h3></v-card-subtitle
                        >

                        <v-card-text>
                            <div>
                                Отказавшись от стакана кофе условной стоимостью в
                                <strong>{{ A }} рублей</strong>, купленного перед работой в кофейне,
                                или от пачки сигарет .. ну или от кружки пива. Вроде небольшие
                                {{ A }} рублей, но вы тем самым сможете увеличить размер ежемесячных
                                сбережений.
                            </div>

                            <div>
                                А начав инвестировать эти накопления можно увеличить. За
                                <strong>{{ n }}</strong> лет вы можете заработать
                                <h3>{{ moneyFormat(FV) }} рублей.</h3>
                                А за <strong>{{ n + 5 }}</strong> лет уже
                                <h3>{{ moneyFormat(getFV(n + 5)) }} рублей.</h3>
                            </div>
                        </v-card-text>
                    </v-card>
                    <v-card class="m-1 latte__d3" width="600px">

                        <D3LineChart :config="chartConfig" :datum="chartData"></D3LineChart>
                        <v-card-subtitle>
                            Получаем {{ moneyFormat(FV) }} рублей за {{ n }} лет
                        </v-card-subtitle>

                        <v-card-text >
                            <div>
                                <v-slider
                                    v-model="n"
                                    :label="`Количество лет: ${n}`"
                                    min="1"
                                    max="60"
                                ></v-slider>
                                <v-slider
                                    v-model="A"
                                    :label="`Буду откладывать каждый день:  ${A}`"
                                    min="1"
                                    max="3000"
                                ></v-slider>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn
                                class="hover:shadow"
                                color="primary"
                                outlined
                                variant
                                @click="$router.push('permanent-annuity')">
                                Поигратся с большими параметрами
                            </v-btn>
                        </v-card-actions>
                    </v-card>
            </div>
        </v-card-text>
    </v-card>
</template>


<script>
import { D3LineChart } from 'vue-d3-charts';

export default {
    name: 'Home',
    data() {
        return {
            A: 150,
            n: 40,
            r: 0.16,
            m: 12,
            p: 12,
            cache1: {},
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
        };
    },
    computed: {
        FV() {
            const {n, chartData} = this;
            this.chartDataClear();
            for (let i = 0; i < n; i++) {
                chartData.push({
                    FV: this.getFV(i) || 0,
                    year: i,
                });
            }
            return this.getFV(n);
        },
    },
    methods: {
        getFV(n) {
            const {A, m, p, r} = this;
            const nameCache = `${A}-${n}-${m}-${p}-${r}`;
            if(this.cache1[nameCache]) {
                return this.cache1[nameCache];
            }
            const top = (1 + r / m) ** (m * n) - 1;
            const bottom = (1 + r / m) ** (m / p) - 1;
            this.cache1[nameCache] = Math.round(A * 30 * (top / bottom) || 0);
            return this.cache1[nameCache];
        },
        chartDataClear() {
            while (this.chartData.length) {
                this.chartData.pop();
            }
        },
        moneyFormat(n) {
            return parseFloat(n)
                .toFixed(2)
                .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ')
                .replace('.', ',');
        },
    },
    components: {
        D3LineChart,
    },
};
</script>

<style scoped lang="scss">
.chart__wrapper {
    margin-top: 0 !important;
}
.latte {
    &__card {
        flex: 2;
        background-color: red;
     }
    &__d3 {
        flex: 6;
    }
}
</style>
