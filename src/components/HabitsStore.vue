<template>
  <ul>
    <HabitListItem
      v-for="HabitListItem in HabitListItems"
      :key="HabitListItem.id"
      :id="HabitListItem.id"
      :name="HabitListItem.name"
    ></HabitListItem>
  </ul>
</template>

<script>
import HabitListItem from './HabitListItem';
export default {
  components: { HabitListItem },
  props: ['HabitListItems'],
};
</script>
