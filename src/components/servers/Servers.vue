<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <server v-for="index in 5" :key="index" :server-id="index" />
      </ul>
    </div>
    <server-details />
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
