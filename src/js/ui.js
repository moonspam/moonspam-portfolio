import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from '../App.vue';

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App),
});
