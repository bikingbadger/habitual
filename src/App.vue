<template>
  <h1>{{ name }}</h1>
  <div v-if="isLoggedIn">
    <p>{{ user }}</p>
    <button type="button" class="btn" @click="logout">
      Logout
    </button>
  </div>
  <div v-else>
    <button type="button" class="btn" @click="showLoginModal">
      Login
    </button>
    <button type="button" class="btn" @click="showRegisterModal">
      Register
    </button>
  </div>
  <LoginModal
    v-show="isLoginVisible"
    @close="closeLoginModal"
    @login="loginUser"
  />
  <RegisterModal
    v-show="isRegisterVisible"
    @close="closeRegisterModal"
    @register="registerUser"
  >
  </RegisterModal>
  <habit-list :habits="storedHabits"></habit-list>
</template>

<script>
import store from '@/store';
import HabitList from '@/components/HabitsList';
import LoginModal from '@/components/LoginModal';
import RegisterModal from '@/components/RegisterModal';
export default {
  components: {
    HabitList,
    LoginModal,
    RegisterModal,
  },
  data() {
    return {
      name: 'Habitual',
      isLoginVisible: false,
      isRegisterVisible: false,
      
    };
  },
  computed: {
    isLoggedIn() {
      return store.getters.isLoggedIn;
    },
    user() {
      return store.getters.getUser;
    },
    storedHabits() {
      return store.getters.getHabits;
    }
  },
  methods: {
    showLoginModal() {
      this.isLoginVisible = true;
    },
    closeLoginModal() {
      this.isLoginVisible = false;
    },
    showRegisterModal() {
      this.isRegisterVisible = true;
    },
    closeRegisterModal() {
      this.isRegisterVisible = false;
    },
    registerUser(user) {
      store.dispatch('register', user);
      this.isRegisterVisible = false;
    },
    loginUser(user) {
      store.dispatch('login', user);
      this.isLoginVisible = false;
    },
    logout(){
      store.dispatch('logout');
    }
  },
};
</script>

<style></style>
