import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../pages/Home.vue';
import profile from '../pages/ProfilePage.vue';
import navbar from '../components/Navbar.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      component: navbar,
      children: [
        {
          path: '/',
          name: 'profile',
          component: profile,
        },
        {
          path: '/home',
          name: 'home',
          component: home,
        },
      ],
    },
  ],
});
