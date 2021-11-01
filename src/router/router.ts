import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home/HomePage.vue';
import Profile from '@/pages/ProfilePage/ProfilePage.vue';
import Login from '@/pages/LoginPage/LoginPage.vue';
import NotFound from '@/pages/404Page/404Page.vue';
import Search from '@/pages/SearchPage/SearchPage.vue';
import WhoToFollow from '@/pages/WhoToFollow/WhoToFollow.vue';
import { state } from '@/store/state';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'login',
      component: Login,
    },
    {
      path: '/profile/:userName',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/whoToFollow',
      name: 'whoToFollow',
      component: WhoToFollow,
      meta: { requiresAuth: true },
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('accessToken') == null) {
      next({
        name: 'login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (state.searchData == null) {
      next({
        name: 'login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
