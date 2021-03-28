import { createStore } from 'vuex';
import authStore from './auth/authIndex';

const store = createStore({
  state() {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    auth: authStore,
  },
});

export default store;
