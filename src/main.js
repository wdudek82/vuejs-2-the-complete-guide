import Vue from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';

Vue.config.productionTip = false;

/* Component registered globally */
Vue.component('app-servers', Home);

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEditedByMethod', age);
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
