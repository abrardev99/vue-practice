import Vue from 'vue'
import App from './App.vue'

// for child to child communication using event Bus
export const eventBus = new Vue();


// adding filter globally 
Vue.filter('addingRupeeSign', (value) => {
  return 'RS ' + value;
})



// resgistering custom directive here.
// simple directive
Vue.directive('success', {
  // we have directive hooks like bind, inserted, update and unbind
  bind(el) {
    el.style.color = 'green';
  }
})

// set value from outside 
Vue.directive('change-color', {
  bind(el, binding, vNode) {
    el.style.color = binding.value;
  }
})

// argument based directive  eg modifier
Vue.directive('arg-color', {
  bind(el, binding, vNode) {
    if (binding.arg == 'bg') {
      el.style.backgroundColor = binding.value;
    } else {
      el.style.color = binding.value;
    }
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
