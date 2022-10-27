import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import Vue from 'vue';
import App from '../App.vue';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA9l83Kje5A3rr5HUvsyuexEA-iCbDNaqw',
  authDomain: 'moonspam-project.firebaseapp.com',
  projectId: 'moonspam-project',
  storageBucket: 'moonspam-project.appspot.com',
  messagingSenderId: '1004104595984',
  appId: '1:1004104595984:web:553c7b651b2cb3f54de895',
  measurementId: 'G-WZ33VWKKSN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App),
});
