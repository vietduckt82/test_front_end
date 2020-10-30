import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Country from './pages/Country.vue';

Vue.use(Router);

const router = new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/country/:slug',
      component: Country,
    }
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
