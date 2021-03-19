<template>
  <h1>{{ name }}</h1>
  <habit-store :habits="storedHabits"></habit-store>
</template>

<script>
import HabitStore from './components/HabitsStore';
export default {
  components: {
    HabitStore,
  },
  data() {
    return {
      name: 'Habitual',
      storedHabits: [
        { id: 1, name: 'Read ' },
        { id: 2, name: 'Meditate' },
        { id: 3, name: 'Stimulants' },
      ],
    };
  },
};
</script>

<style></style>
