<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h1>Login</h1>
        </slot>
        <button type="button" class="btn-close" @click="close">
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <label for="email">email</label>
          <input type="email" name="email" id="email" />
          <label for="password">password</label>
          <input type="password" name="password" id="password" />
        </slot>
      </section>

      <footer class="modal-footer">
        <slot name="footer">
          <button>Login</button>
          <button>Register</button>
        </slot>
        <!-- <button type="button" class="btn-green" @click="close">
          Close Modal
        </button> -->
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  font-weight: bold;
  /* color: #4aae9b; */
  background-color: white;
}
</style>
