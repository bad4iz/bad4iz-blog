<template>
    <div class="mt-12 parallax flex justify-center align-center">
        <v-hover
            close-delay="300"
            v-slot="{ hover }"
        >
            <v-card
                class="mx-auto my-16"
                max-width="400"
                :elevation="hover ? 12 : 2"
            >
                <v-img
                    src="/img/abc-finance.png"
                    height="200px"
                    class="flex  "
                >


                    <v-card-title class="v-card-title px-0">
                        <p class="bg-white bg-opacity-25 text-center mb-0 ">
                            Способ простой.
                        </p>
                    </v-card-title>

                </v-img>

                <v-card-title>
                    Азбука финансового образования
                </v-card-title>

                <v-card-subtitle>
                    <p class="text-gray-600"> Учимся планировать и копить
                    </p>
                    <p class="pb-0 mb-0">
                        Способ простой. Логичный. Устанавливаем цели
                    </p>
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn
                        class="ml-auto"
                        outlined
                        color="primary"
                        to="/post/journal/ABCOfFinanceSimple"
                    >
                        Подробнее
                    </v-btn>
                </v-card-actions>

            </v-card>
        </v-hover>

    </div>
</template>

<script>
export default {
    name: 'ABCOfFinanceWidget',
    data: () => ({
        items: [
            {
                color: '#1F7087',
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'Supermodel',
                artist: 'Foster the People',
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Halcyon Days',
                artist: 'Ellie Goulding',
            },
        ],
    }),
};
</script>
<!--https://vsvoemdome.ru/wp-content/uploads/2021/03/chto-takoe-investitsii-prostymi-slovami.png-->
<!--https://start.docuware.com/hubfs/ROI-on-technology-with-coins-and-growth.jpg-->
<!--https://vsvoemdome.ru/wp-content/uploads/2021/03/chto-takoe-investitsii-prostymi-slovami-550x341.png-->
<!--https://gudvill.com/wp-content/uploads/2019/10/Sotsialno-ekonom.jpg-->
<!--https://st.depositphotos.com/3246763/4812/i/950/depositphotos_48120943-stock-photo-tree-growing-from-pile-of.jpg-->
<style scoped>
.parallax {
    /* The image used */
    background-image: url("/img/momey-tree.jpg");

    /* Set a specific height */
    /*min-height: 500px;*/

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    /*background-size: cover;*/

    /*filter: blur(1px);*/
    /*box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);*/
}

.v-card {
    transition: all .3s ease-in-out;
}
.v-card-title{
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: stretch;
}
</style>
