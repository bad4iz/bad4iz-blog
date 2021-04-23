<template>
    <div>
        <div class="parallax">

            <div class="parallax__layer parallax__layer--back">
                <div class="flex flex-nowrap justify-center">
                    <v-sheet
                        v-for="(image, i) in images"
                        :key="i"
                        height="100%"

                    >
                        <v-img
                            :src="image+'900x.jpg'"
                            height="500px"
                            width="450px"
                            alt=""/>

                    </v-sheet>

                </div>
                <v-row class="mt-5 flex justify-between min-sm__resp-row">
                    <v-card
                        max-width="400"
                        class="ml-3"
                        flat
                    >
                        <v-carousel
                            cycle
                            height="100%"
                            hide-delimiter-background
                            show-arrows-on-hover
                        >
                            <v-carousel-item
                                v-for="(quotes, i) in quotes"
                                :key="i"
                            >
                                <v-alert
                                    outlined
                                    color="black"
                                >
                                    <div class="italic">
                                        {{ quotes.text }}
                                    </div>
                                    <div class="title text-right text-uppercase">
                                        {{ quotes.author }}
                                    </div>
                                </v-alert>
                            </v-carousel-item>
                        </v-carousel>
                    </v-card>
                    <v-card  max-width="400" min-width="350" elevation="4" class="ml-3 memento-mori-small__">
                        <v-card-title>
                            <v-menu
                                ref="menuLittle"
                                v-model="menuLittle"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        class="hidden-md-and-up"
                                        v-model="date"
                                        label="Укажи День рождения"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    ref="picker"
                                    v-model="date"
                                    :max="new Date().toISOString().substr(0, 10)"
                                    min="1950-01-01"
                                    locale="ru"
                                    first-day-of-week="1"
                                    @change="save"
                                ></v-date-picker>
                            </v-menu>
                            <h1 class="mx-auto uppercase">
                                Memento mori
                            </h1>

                        </v-card-title>
                        <v-card-text>

                            <div
                                class="flex-nowrap flex memento-mori-small__row justify-center"
                                v-for="year in 90"
                                :key="year">
                                <div
                                    v-for="week in 54"
                                    :key="week"
                                    :class="['memento-mori-small__cell', { 'weeks-burned-out': (year <= burnedOut.years ||(year - 1 === burnedOut.years && week <= burnedOut.weeks)) }]"
                                >

                                </div>
                            </div>
                        </v-card-text>
                    </v-card>


                </v-row>

            </div>

            <v-row class="flex justify-center parallax__layer parallax__layer--base  hidden-sm-and-down">

                <v-card class="mb-8" elevation="9">
                    <v-card-title>
                        <h1 class="mx-auto uppercase">
                            Memento mori
                        </h1>
                    </v-card-title>
                    <v-card-text>


                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="date"
                                    label="Укажи День рождения"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                ref="picker"
                                v-model="date"
                                :max="new Date().toISOString().substr(0, 10)"
                                min="1950-01-01"
                                locale="ru"
                                first-day-of-week="1"
                                @change="save"
                            ></v-date-picker>
                        </v-menu>
                        <div class="mx-auto mr-9">
                            <div
                                class="flex-nowrap flex memento-mori__row justify-center"
                                v-for="year in 90"
                                :key="year">
                                <div
                                    v-for="week in 54"
                                    :key="week"
                                    :class="['memento-mori__cell', { 'weeks-burned-out': (year <= burnedOut.years ||(year - 1 === burnedOut.years && week <= burnedOut.weeks)) }]"
                                >
                                </div>
                                <span class="relative">
                                    <span class="memento-mori__year" v-if="!(year%5)">
                                        {{ year }}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
                <v-col md="12"/>
            </v-row>

        </div>
    </div>
</template>

<script>
import { DateTime } from 'luxon';

export default {
    name: 'MementoMoriView',
    data: () => ({
        date: DateTime.local().minus({year: 18}).toISODate(),
        menu: false,
        menuLittle: false,
        images: [
            '//cdn.shopify.com/s/files/1/0442/9109/6740/products/memento-mori-life-calendar-unframed-672782_',
            '//cdn.shopify.com/s/files/1/0442/9109/6740/products/memento-mori-life-calendar-framed-947715_',
            '//cdn.shopify.com/s/files/1/0442/9109/6740/products/memento-mori-life-calendar-framed-309021_',
            '//cdn.shopify.com/s/files/1/0442/9109/6740/products/memento-mori-life-calendar-framed-438032_',
        ],
        quotes: [
            {
                author: 'синека',
                text: 'Жизнь дана нам достаточно долгая, и её с избытком хватит на свершение величайших дел, если распределить её с умом. Но если она не направляется доброю целью, если наша расточительность и небрежность позволяют ей утекать у нас меж пальцев, то когда пробьёт наш последний час, мы с удивлением обнаруживаем, что жизнь, течения которой мы не заметили, истекла.',
            },
            {
                author: 'Стив Джобс',
                text: '  Память о том, что я скоро умру — самый важный инструмент, который помогает мне принимать сложные решения в моей жизни. Потому что всё остальное — чужое мнение, вся эта гордость, вся эта боязнь смущения или провала — все эти вещи падают пред лицом смерти, оставляя лишь то, что действительно важно.',
            }
        ],
    }),
    computed: {
        burnedOut() {
            if(this.date) {

                const date2 = DateTime.fromISO(this.date);
                const date1 = DateTime.local();

                const diff = date1.diff(date2, ['years', 'weeks']);
                console.log(diff.toObject());
                return diff.toObject();
            }
            return {
                years: 0,
                weeks: 0,
            };
        },

    },
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'));
        },
        menuLittle(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'));
        },
    },
    methods: {
        save(date) {
            if(this.menuLittle) {
                this.$refs.menuLittle.save(date);
            }
            if(this.this.menu) {
                this.$refs.menu.save(date);
            }
        },
    },
};
</script>

<style scoped lang="scss">

.parallax {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-perspective: 1px;
    perspective: 1px;

    &::-webkit-scrollbar {
        width: 0 !important
    }
}

.parallax__layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.parallax__layer--base {
    margin-top: 40vh;
    transform: translateZ(0);
}

.parallax__layer--back {
    transform: scale(2) translateZ(-1px);
}

.memento-mori__ {
    &row {
        &:nth-child(10n) {
            margin-bottom: 3px;
        }
    }

    &cell {
        padding: 4px;
        margin: 1px;
        border: 1px #1a202c solid;

        &:nth-child(27) {
            margin-left: 3px;
        }

        &:nth-child(9) {
            margin-left: 2px;
        }

        &:nth-child(18) {
            margin-left: 2px;
        }

        &:nth-child(36) {
            margin-left: 2px;
        }

        &:nth-child(45) {
            margin-left: 2px;
        }
    }

    &year {
        position: absolute;
        left: 2px;
        bottom: -6px;
    }
}

.memento-mori-small__ {
    margin-top: -100px;

    &row {
        &:nth-child(10n) {
            margin-bottom: 1px;
        }
    }

    &cell {
        padding: 1px;
        margin: 1px 1px 0 0;
        border: 1px grey solid;

        &:nth-child(27) {
            margin-left: 2px;
        }

    }
}

.weeks-burned-out {
    background-color: #1a202c;
}

@media only screen and (max-width: 959px) {
    .min-sm{
        &__resp-row {
            justify-content: center;
            padding-bottom: 500px;
        }
    }
    .memento-mori-small__{
        margin-top: 1em;
    }
}
</style>
