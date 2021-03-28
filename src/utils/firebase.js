import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCjseArOW1_K2cXuQIFierl-w51iUXdwqo',
  authDomain: 'habitual-87f18.firebaseapp.com',
  projectId: 'habitual-87f18',
  storageBucket: 'habitual-87f18.appspot.com',
  messagingSenderId: '411900195483',
  appId: '1:411900195483:web:d981d52f907e4474cdcc3e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
