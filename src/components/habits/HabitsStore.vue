<template>
  <ul>
    <habit
      v-for="habit in habits"
      :key="habit.id"
      :id="habit.id"
      :name="habit.name"
    ></habit>
  </ul>
</template>

<script>
import Habit from './Habit';
export default {
  components: { Habit },
  props: ['habits'],
};
</script>
