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
      storedHabits: [
        {
          id: 1,
          name: 'Read ',
          history: [
            { habitId: 1, date: '01/02/21', completed: true },
            { habitId: 1, date: '02/02/21', completed: false },
            { habitId: 1, date: '03/02/21', completed: true },
            { habitId: 1, date: '04/02/21', completed: false },
            { habitId: 1, date: '05/02/21', completed: true },
            { habitId: 1, date: '06/02/21', completed: true },
            { habitId: 1, date: '07/02/21', completed: true },
          ],
        },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return store.getters.isLoggedIn;
    },
    user() {
      return store.getters.getUser;
    },
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
  },
};
</script>

<style></style>
