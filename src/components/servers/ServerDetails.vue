<template>
  <div class="col-xs-12 col-sm-6">
    <h2 v-if="!myServer">Select server</h2>
    <h2 v-else="myServer">Server</h2>
    <div v-if="myServer">
      <p>id: {{ myServer.id }}</p>
      <p>name: {{ myServer.name }}</p>
      <p>status: {{ myServer.status }}</p>
      <button @click="setServerStatus('active')">Active</button>
      <button @click="setServerStatus('inactive')">Deactivate</button>
    </div>
    <button v-if="myServer" @click="clear">Clear</button>
  </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  name: 'ServerDetails',
  props: {
    server: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      myServer: this.server,
    };
  },
  created() {
    eventBus.$on('serverDetailRequested', (serverObj) => {
      this.myServer = serverObj;
    });
  },
  methods: {
    clear() {
      this.myServer = null;
    },
    setServerStatus(status) {
      eventBus.changeServerStatus(this.myServer.id, status);
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid black;
  padding: 0.5rem;
}

h2 {
  font-size: 1.5rem;
}

button {
  margin-top: 0.5rem;
}
</style>
