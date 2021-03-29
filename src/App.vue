<template>
  <v-app :dark="getDark">
    <NavigationDrawer />
    <v-app-bar
      app
      :clipped-left="getPrimaryDrawer.clipped"
      absolute
      flat
      class="header"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon
        v-if="getPrimaryDrawer.type !== 'permanent'"
        @click.stop="setPrimaryDrawerAction({ model: !getPrimaryDrawer.model })"
      />
      <v-toolbar-title class="title" @click="()=>$router.push({ path: '/' })">{{ $appConfig.titleApp }}</v-toolbar-title>

      <v-spacer />

      <v-list dense class="menu">
        <v-list-item to="/">
          <v-list-item-content>
            <v-list-item-title>Посты</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/settings-app">
          <v-list-item-content>
            <v-list-item-title>Философия</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer :inset="getFooter.inset" app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const {
    mapGetters: mapGettersAppSettings,
    mapActions: mapActionsAppSettings,
  } = createNamespacedHelpers('appSettings');

  export default {
    name: 'App',
    components: {
      NavigationDrawer: () => import('@/components/NavigationDrawer'),
    },
    data: () => ({}),
    methods: {
      ...mapActionsAppSettings([
        'toggleDarkAction',
        'setPrimaryDrawerAction',
        'setFooterAction',
      ]),
    },
    computed: {
      ...mapGettersAppSettings([
        'getDark',
        'getDrawers',
        'getPrimaryDrawer',
        'getFooter',
      ]),
    },
  };
</script>

<style scoped>
  header.v-toolbar.v-app-bar.header {
    background-color: inherit;
  }
  .menu {
    display: flex;
  }
  .title {
    cursor: pointer;
  }
</style>
