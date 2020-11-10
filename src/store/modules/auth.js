import { make } from 'vuex-pathify';
import StorageService from '@/services/storage.service';

const state = {
  userInfo: StorageService.getUser() || {},
  authToken: StorageService.getToken() || '',
};

// make all mutations
const mutations = make.mutations(state);

// automatically create  action
const actions = {
  ...make.actions('userInfo'),
  ...make.actions('authToken'),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
