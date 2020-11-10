import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index';

// page
import Login from '@/views/login/index.vue'
import Homepage from '@/views/index/index.vue'
import StandardContainer from '@/views/container/container.vue'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/console',
      name: 'console',
      component: StandardContainer,
      children: [
        {
          path: '/index',
          name: 'Homepage',
          component: Homepage,
          meta: {
            type: 'Homepage',
          },
        },
      ]
    },
  ]
});
router.beforeEach((to, from, next) => {
  /* 记住刷新前路由 */
  // console.log(to.meta.type);
  store.dispatch('router/setActiveName', to.meta.type);
  next();
});
export default router;
