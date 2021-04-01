<template>
  <base-modal>
    <template #header><h2>Add Habit</h2></template>
    <template #body>
      <label for="name">Habit</label>
      <input type="text" name="name" id="name" v-model="habit.name" size="50" />
      <label for="description">Description</label>
      <textarea
        type="text"
        name="description"
        id="description"
        v-model="habit.description"
        cols="100"
        rows="2"
      />
    </template>
    <template #footer>
      <button @click="addHabit">Add</button>
    </template>
  </base-modal>
</template>

<script>
import { reactive } from 'vue';
import BaseModal from './BaseModal.vue';

export default {
  components: { BaseModal },
  setup(props, { emit }) {
    

    const habit = reactive({ name: '', description: '' });

    const addHabit = () => {
      emit('addHabit', habit);
    };

    return {
      habit,
      addHabit,
    };
  },
};
</script>
