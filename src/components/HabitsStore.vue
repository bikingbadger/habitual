<template>
  <ul>
    <HabitListItem
      v-for="habit in habits"
      :key="habit.id"
      :id="habit.id"
      :name="habit.name"
      :history="habit.history"
    ></HabitListItem>
  </ul>
</template>

<script>
import HabitListItem from './HabitListItem';
export default {
  components: { HabitListItem },
  props: ['habits'],
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
