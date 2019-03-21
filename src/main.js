import Vue from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';

Vue.config.productionTip = false;

/* Component registered globally */
Vue.component('app-servers', Home);

/* Global Directive */
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.background = 'green';
    // el.style.background = binding.value;
    let delay = 0;

    if (binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.background = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEditedByMethod', age);
    },
    showServerDetails(serverObj) {
      this.$emit('serverDetailRequested', serverObj);
    },
    changeServerStatus(serverId, status) {
      this.$emit('changeServerStatus', { serverId, status });
    },
  },
});

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');
