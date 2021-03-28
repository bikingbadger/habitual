import authActions from './authActions.js';
import authMutations from './authMutations';
import authGetters from './authGetters';

export default {
  state() {
    return {
      id: 0,
      username: '',
      email: '',
      registrationError: false,
      errorMsg: '',
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,
};
