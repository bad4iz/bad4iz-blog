import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { createProvider } from './vue-apollo';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

// подключение конфигураций env
import configPlugin from '@/plugins/configEnv';
Vue.use(configPlugin);

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
