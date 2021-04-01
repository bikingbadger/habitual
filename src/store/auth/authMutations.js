export default {
  authSuccess(state, user) {
    console.log(user);
    state.id = user.id;
    state.email = user.email;
    state.username = user.username;
    state.registrationError = false;
    state.isLoggedIn = true;
    state.errorMsg = '';
  },
  authFail(state, error) {
    state.registrationError = true;
    state.isLoggedIn = false;
    state.errorMsg = error.message;
  },
  logout(state) {
    state.id = null;
    state.email = null;
    state.username = null;
    state.isLoggedIn = false;
  },
};
