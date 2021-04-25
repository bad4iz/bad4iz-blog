<template>
    <v-card class="mt-16" >
        <div class="relative bg-white overflow-hidden">
            <div class="max-w-7xl mx-auto">
                <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg
                        class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100"/>
                    </svg>

                    <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start"
                             aria-label="Global">
                            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div class="flex items-center justify-between w-full md:w-auto">

                                </div>
                            </div>

                        </nav>
                    </div>

                    <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div class="sm:text-center lg:text-left">
                            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span class="block xl:inline">Memento Mori</span>
                            </h1>
                            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span class="block text-indigo-600 xl:inline">помни о смерти</span>
                            </h1>
                            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Жизнь дана нам достаточно долгая, и её с избытком хватит на свершение величайших дел, если распределить её с умом. Но если она не направляется доброю целью, если наша расточительность и небрежность позволяют ей утекать у нас меж пальцев, то когда пробьёт наш последний час, мы с удивлением обнаруживаем, что жизнь, течения которой мы не заметили, истекла.
                            </p>
                            <p>СИНЕКА</p>
                        </div>
                        <v-card-actions>
                            <v-btn
                                class="ml-auto"
                                outlined
                                color="primary"
                                to="/memento-mori"
                            >
                                Подробнее
                            </v-btn>
                        </v-card-actions>
                    </main>
                </div>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div class="parallax h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                     >
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'MementoMori'
};
</script>

<style scoped>
.parallax {
    /* The image used */
    /*background-image: url("https://cdn.shopify.com/s/files/1/0442/9109/6740/products/memento-mori-life-calendar-framed-258889_900x.jpg");*/
    background-image: url("http://cdn.shopify.com/s/files/1/0442/9109/6740/products/memento-mori-life-calendar-framed-438032_900x.jpg");
    /*background-image: url("http://cdn.shopify.com/s/files/1/0442/9109/6740/products/memento-mori-life-calendar-framed-309021_900x.jpg");*/

    /* Set a specific height */
    /*min-height: 500px;*/

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position:  bottom -100px right 10px;
    background-repeat: no-repeat;
    /*background-size: cover;*/

    /*filter: blur(1px);*/
    /*box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);*/
}
</style>
