<template>
  <li>
    <input type="checkbox" :id="id" :name="name" :value="name" />
    <label :for="name">{{ name }}</label>
    <div class="history-box complete">x</div>
    <div class="history-box complete">x</div>
    <div class="history-box">o</div>
    <div class="history-box complete">x</div>
    <div class="history-box">o</div>
    <div class="history-box complete">x</div>
    <div class="history-box complete">x</div>
  </li>
</template>

<script>
export default {
  name: 'habit',
  props: {
    id: Number,
    name: String,
  },
};
</script>

<style scoped>
li {
  display: grid;
  grid-template-columns: 1fr 5fr repeat(7, 1fr);
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
}

input[type='checkbox']:checked + label {
  color: #ccc;
  font-style: italic;
  text-decoration: line-through;
}

.history-box {
  padding: 1rem;
  border: 2px blue solid;
  border-radius: 0.3rem;
}

.complete {
  background-color: rgb(127, 214, 255);
}
</style>
