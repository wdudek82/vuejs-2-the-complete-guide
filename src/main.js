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
    showServerDetails(serverObj) {
      this.$emit('serverDetailRequested', serverObj);
    },
    changeServerStatus(serverId, status) {
      this.$emit('changeServerStatus', { serverId, status });
    },
  },
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
