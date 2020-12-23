<template>
  <li>
    <input type="checkbox" :id="id" :name="name" :value="name" />
    <label :for="name">{{ name }}</label>
  </li>
</template>

<script>
export default {
  props: {
    id: Number,
    name: String,
  },
};
</script>
