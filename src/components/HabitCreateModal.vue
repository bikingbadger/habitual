<template>
  <base-modal>
    <template #header>Add Habit</template>
    <template #body>Test</template>
    <template #footer>
      <button @click="addHabit">Add</button>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from './BaseModal.vue';

export default {
  components: { BaseModal },
};
</script>
