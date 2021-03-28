<template>
  <h1>{{ name }}</h1>
  <button type="button" class="btn" @click="showLoginModal">
    Open Modal!
  </button>

  <LoginModal v-show="isLoginVisible" @close="closeLoginModal" />
  <habit-store :habits="storedHabits"></habit-store>
</template>

<script>
import HabitStore from './components/HabitsStore';
import LoginModal from '@/components/LoginModal';
export default {
  components: {
    HabitStore,
    LoginModal,
  },
  data() {
    return {
      name: 'Habitual',
      isLoginVisible: true,
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
  methods: {
    showLoginModal() {
      this.isLoginVisible = true;
    },
    closeLoginModal() {
      this.isLoginVisible = false;
    },
  },
};
</script>

<style></style>
