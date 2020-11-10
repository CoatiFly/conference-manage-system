import { make } from 'vuex-pathify';

const state = {
  activeName: '',
};

// make all mutations
const mutations = make.mutations(state);

// automatically create  action
const actions = {
  ...make.actions('activeName'),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
