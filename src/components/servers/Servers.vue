<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <Server v-for="index in 5" :key="index" :server-id="index" />
      </ul>
    </div>
    <ServerDetails />
  </div>
</template>

<script>
import Server from './Server';
import ServerDetails from './ServerDetails';

export default {
  name: 'Servers',
  components: {
    Server,
    ServerDetails,
  },
};
</script>

<style scoped></style>
