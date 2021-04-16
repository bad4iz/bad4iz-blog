import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../views/Hello';
import HelloApollo from '../views/HelloApollo';
import Home from '../views/Home';

Vue.use(Router);

// import VueRouter from 'vue-router';
// import About from '../views/About';
// import Home from '../views/Home';
// import Welcome from '../views/Welcome';

export const routeNavigationDrawer = [
    {
        path: '/',
        to: '/',
        name: 'home',
        icon: 'mdi-view-dashboard',
        title: 'Домашняя',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/Home'),
    },
    {
        path: '/memento-mori',
        to: '/memento-mori',
        name: 'memento-mori',
        icon: 'mdi-view-dashboard',
        title: 'memento-mori',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/MementoMoriView'),
    },
    {
        path: '/mark-down-view',
        to: '/mark-down-view',
        name: 'MarkDownView',
        icon: 'mdi-view-dashboard',
        title: 'MarkDownView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/MarkDownView'),
    },
    {
        path: '/hello',
        to: '/hello',
        name: 'hello',
        icon: 'mdi-human',
        title: 'hello world',
        component: Hello
    },
    {
        to: '/hello-apollo',
        path: '/hello-apollo',
        name: 'hello-apollo',
        icon: 'mdi-palm-tree',
        title: 'hello qraphQl apollo ',
        component: HelloApollo
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

export const routeOther = [
    {
        path: '/post/journal/:fileName',
        // to: '/post/journal/:fileName',
        name: 'PostsJournalView',
        icon: 'mdi-view-dashboard',
        title: 'PostsJournalView',
        component: () => import(/* webpackChunkName: "about" */ '@/views/PostsJournalView'),
    },
];

export const routeNavigationDrawerFooter = [
    {
        path: '/settings-app',
        to: '/settings-app',
        name: 'settingsApp',
        icon: 'mdi-tune',
        title: 'Настройки приложения',
        component: () => import('@/views/SettingsApp'),
    },
];


export const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [...routeNavigationDrawer, ...routeNavigationDrawerFooter, ...routeOther],
});
