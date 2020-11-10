import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import Components from '@/components';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// user-defined
import tools from './tools';
import './styles/index.scss';
Vue.prototype.$tool = tools.newRouter;

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Components);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
