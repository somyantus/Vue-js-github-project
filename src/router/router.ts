import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import Profile from '@/pages/ProfilePage/ProfilePage.vue';
import Login from '@/pages/LoginPage/LoginPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'login',
      component: Login,
    },
    {
      path: '/profile',
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
