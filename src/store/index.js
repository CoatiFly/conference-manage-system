// packages
import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify';

// modules
import router from './modules/router';
import auth from './modules/auth';

// store definition
const store = {
  // state, members, modules, etc
  modules: {
    auth,
    router,
  },
};

// plugins
const plugins = [
  // https://davestewart.github.io/vuex-pathify/#/setup/install
  // plaese watch
  // https://davestewart.github.io/vuex-pathify/#/discussion/rationale
  // help reduce vuex duplicate code;
  pathify.plugin,
];

// store
Vue.use(Vuex);

export default new Vuex.Store({
  plugins,
  ...store
});
