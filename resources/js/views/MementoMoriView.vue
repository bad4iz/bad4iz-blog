<template>
    <v-container >
        <div class="flex flex-nowrap justify-center">
            <v-sheet
                v-for="(image, i) in images"
                :key="i"
                width="100%"
            >
                <img :src="image+'900x.jpg'" alt="">

            </v-sheet>
        </div>
        <v-row class="flex  justify-center">


                <v-card>
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
                        <div class="mx-auto">
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
                            </div>
                        </div>

                    </v-card-text>
                </v-card>

        </v-row>


    </v-container>
</template>

<script>
import { DateTime } from 'luxon';

export default {
    name: 'MementoMoriView',
    data: () => ({
        date: DateTime.local().minus({year: 18}).toISODate(),
        menu: false,
        images: [
            '//cdn.shopify.com/s/files/1/0442/9109/6740/products/memento-mori-life-calendar-unframed-672782_',
            '//cdn.shopify.com/s/files/1/0442/9109/6740/products/memento-mori-life-calendar-framed-947715_',
            '//cdn.shopify.com/s/files/1/0442/9109/6740/products/memento-mori-life-calendar-framed-309021_',
            '//cdn.shopify.com/s/files/1/0442/9109/6740/products/memento-mori-life-calendar-framed-438032_',
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
    },
    methods: {
        save(date) {
            this.$refs.menu.save(date);
        },
    },
};
</script>

<style scoped lang="scss">
.memento-mori__ {
    &row {
        &:nth-child(10n) {
            margin-bottom: 6px;
        }
    }

    &cell {
        padding: 4px;
        margin: 1px;
        border: 1px #1a202c solid;

        &:nth-child(27) {
            margin-left: 6px;
        }

        &:nth-child(9) {
            margin-left: 3px;
        }

        &:nth-child(18) {
            margin-left: 3px;
        }

        &:nth-child(36) {
            margin-left: 3px;
        }

        &:nth-child(45) {
            margin-left: 3px;
        }
    }
}

.weeks-burned-out {
    background-color: #1a202c;
}

</style>
