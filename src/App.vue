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
  <habit-list :habits="storedHabits"></habit-list>
  <button type="button" class="btn" @click="showHabitCreateModal">
    Create
  </button>
  <login-modal
    v-show="isLoginVisible"
    @close="closeLoginModal"
    @login="loginUser"
  />
  <register-modal
    v-show="isRegisterVisible"
    @close="closeRegisterModal"
    @register="registerUser"
  />
  <habit-create-modal
    v-show="isHabitCreateVisible"
    @close="closeHabitCreateModal"
    @addHabit="addHabit"
  />
</template>

<script>
import store from '@/store';
import HabitList from '@/components/HabitsList';
import LoginModal from '@/components/LoginModal';
import RegisterModal from '@/components/RegisterModal';
import HabitCreateModal from '@/components/HabitCreateModal';

export default {
  components: {
    HabitList,
    LoginModal,
    RegisterModal,
    HabitCreateModal,
  },
  data() {
    return {
      name: 'Habitual',
      isLoginVisible: false,
      isRegisterVisible: false,
      isHabitCreateVisible: false,
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
    },
  },
  methods: {
    /**
     * Login related methods
     */
    showLoginModal() {
      this.isLoginVisible = true;
    },
    closeLoginModal() {
      this.isLoginVisible = false;
    },
    loginUser(user) {
      store.dispatch('login', user);
      this.closeLoginModal();
    },
    /**
     * Registration related methods
     */
    showRegisterModal() {
      this.isRegisterVisible = true;
    },
    closeRegisterModal() {
      this.isRegisterVisible = false;
    },
    registerUser(user) {
      store.dispatch('register', user);
      this.closeRegisterModal();
    },
    /**
     * Habit related methods
     */
    showHabitCreateModal() {
      this.isHabitCreateVisible = true;
    },
    closeHabitCreateModal() {
      this.isHabitCreateVisible = false;
    },
    addHabit(habit) {
      store.dispatch('addHabit', habit);
      this.closeHabitCreateModal();
    },
    logout() {
      store.dispatch('logout');
    },
  },
};
</script>

<style></style>
