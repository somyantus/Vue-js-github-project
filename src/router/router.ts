import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import Profile from '@/pages/ProfilePage/ProfilePage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
  ],
});
