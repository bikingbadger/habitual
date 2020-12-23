<template>
  <h1>{{ name }}</h1>
  <ul>
    <li v-for="habit in habits">
      
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      name: 'Habitual',
      habits: [{name: 'Read '},
        {name: 'Meditate'},
        {name: 'Stimulants'}
        ]
    };
  },
  components: {},
};
</script>

<style></style>
