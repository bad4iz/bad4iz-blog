<template>
    <v-content>
        <h1 class="text-center">Записки натуралиста</h1>
        <v-card
            max-width="900"
            v-for="(item, i) in items"
            :key="i"
            flat
            class="mx-auto"
        >
            <v-card-title>
                {{ item.title }}
            </v-card-title>
            <v-card-text>
                {{ item.text }}
                <v-container v-if="item.children">
                    <v-card
                        class=""
                        v-for="(child, i) in item.children"
                        :key="i"
                        flat
                    >
                        <v-card-title>
                            {{ child.title }}
                        </v-card-title>
                        <v-card-text>
                            {{ child.text }}
                        </v-card-text>
                        <v-card-action class="flex justify-end">
                            <v-btn
                                class="ml-auto"
                                outlined
                                color="primary"
                                :to="`/post/journal/${child.path}`"
                            >
                                Почитать
                            </v-btn>
                        </v-card-action>
                    </v-card>
                </v-container>
            </v-card-text>
            <v-card-action v-if="item.path" class="flex justify-end">
                <v-btn
                    class="ml-auto"
                    outlined
                    color="primary"
                    :to="`/post/journal/${item.path}`"
                >
                    Почитать
                </v-btn>
            </v-card-action>
        </v-card>
    </v-content>
</template>

<script>
export default {
    name: 'PostsView',
    data: () => ({
        selectedItem: 1,
        items: [
            {
                title: 'Финансы',
                text: 'немного о финансах',
                children: [
                    {
                        title: 'Учимся планировать и копить',
                        text: 'Способ простой. Логичный. Устанавливаем цели',
                        path: 'abc-of-finance-simple',
                    },
                    {
                        title: 'Математика в помощь',
                        text: 'Берем математику в помощь. Расчитвываем с помощью Ануитетов, скока копить и на скока хватит',
                        path: 'abc-of-finance-annuity',
                    },

                ]
            },
            {title: 'Дорасти до суммы', path: 'grow-to-the-amount', text: 'Сказ о том что надо дорастать до суммы или статуса, ментально, духовно. В общем быть готовым к тому что вы хотите', icon: 'mdi-account'},
            {title: 'Наездник', path: 'horseman', text: 'О раздвоении'},
            {title: 'Зарплата', path: 'salary', text: 'Работать за зарплату или же зарплата за работу'},
            {title: 'Цель', path: 'target', text: 'Цель или процесс?'},
            {title: 'Freedom', path: 'freedom', text: 'Freedom'},
            {title: 'Поток 2.0', path: 'steam_2_0', text: ''},
        ],
    }),
};
</script>

<style scoped>

</style>
