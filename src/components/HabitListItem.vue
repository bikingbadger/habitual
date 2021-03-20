<template>
  <li>
    <label :for="name">{{ name }}</label>

    <input
      v-for="day in history"
      :key="day.date"
      :data-history="day.completed"
      type="checkbox"
      id="day.date"
      name="scales"
      :checked="day.completed"
    />
  </li>
</template>

<script>
export default {
  name: 'habit',
  props: {
    name: String,
    history: Array,
  },
};
</script>

<style scoped></style>
