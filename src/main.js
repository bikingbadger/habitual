import { createApp } from 'vue';
import firebase from '@/utils/firebase.js';
import store from '@/store';
import App from './App.vue';

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(firebase);
    app.use(store);

    app.mount('#app');
  }
});
