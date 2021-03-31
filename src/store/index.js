import { createStore } from 'vuex';
import authStore from './auth/authIndex';
import habitsStore from './habits/habitIndex';

const store = createStore({
  state() {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    auth: authStore,
    habits: habitsStore,
  },
});

export default store;
