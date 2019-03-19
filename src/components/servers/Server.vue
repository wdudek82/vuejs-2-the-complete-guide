<template>
  <li class="list-group-item">
    Server #{{ server.id }} ({{ server.status }})
    <button @click="showServerDetails">Details</button>
  </li>
</template>

<script>
import { eventBus } from '../../main';

export default {
  name: 'Server',
  props: {
    server: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showServerDetails() {
      eventBus.showServerDetails(this.server);
    },
  },
};
</script>

<style scoped>

</style>
