import Vue from 'vue'
import App from './App.vue'

// for child to child communication using event Bus

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
