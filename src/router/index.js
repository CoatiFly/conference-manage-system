import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index';

// page
import Login from '@/views/login/index.vue'
import Index from '@/views/index/index.vue'
import Form from '@/views/form/form.vue'
import Detail from '@/views/detail/detail.vue'
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
          component: Index,
          meta: {
            type: 'Homepage',
          },
        },
        {
          path: '/form',
          name: 'MeetingList', 
          component: Form,
          meta: {
            type: 'MeetingList',
          },
        },
        {
          path: '/detail',
          name: 'Detail', 
          component: Detail,
          meta: {
            type: 'MeetingList',
          },
        }
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
