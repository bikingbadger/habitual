export default {
  authSuccess(state, user) {
    console.log(state, user);
    state.email = user.email;
    state.username = user.username;
    state.registrationError = false;
    state.errorMsg = '';
  },
  authFail(state, error) {
    state.registrationError = true;
    state.errorMsg = error.message;
  },
};
