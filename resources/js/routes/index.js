import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// import VueRouter from 'vue-router';
// import About from '../views/About';
// import Home from '../views/Home';
// import Welcome from '../views/Welcome';

export const routeNavigationDrawer = [
    {
        path: '/',
        to: '/',
        icon: 'dashboard',
        name: 'home',
        title: 'Домашняя',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/Home'),
    },
    // {
    //   path: '/posts',
    //   to: '/posts',
    //   icon: 'dashboard',
    //   name: 'posts',
    //   title: 'Публикации',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/PostsView'),
    // },
    // {
    //   path: '/memento-mori',
    //   to: '/memento-mori',
    //   icon: 'dashboard',
    //   name: 'mementoMori',
    //   title: 'Memento Mori',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/MementoMori'),
    // },
];

export const routeNavigationDrawerFooter = [
    {
        path: '/settings-app',
        to: '/settings-app',
        name: 'settingsApp',
        icon: 'build',
        title: 'Настройки приложения',
        component: () => import('@/views/SettingsApp'),
    },
];


export const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [...routeNavigationDrawer, ...routeNavigationDrawerFooter],
});
