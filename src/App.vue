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
};
</script>

<style></style>
