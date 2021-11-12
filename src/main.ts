import Vue from 'vue';
import router from './router/router';
import App from './App.vue';
import store from './store';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

Vue.config.productionTip = false;
Vue.use(Toast);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
