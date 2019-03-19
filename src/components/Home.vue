<template>
  <div>
    <h1>Foo</h1>
    <app-server-status v-for="server in 5" :key="server"></app-server-status>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus';

export default {
  name: 'Home',
  components: {
    'app-server-status': ServerStatus,
  },
  props: {
    // status: {
    //   type: String,
    //   default: '',
    // },
  },
  data() {
    return {
      status: 'Good',
    };
  },
  methods: {
    changeStatus() {
      this.status = 'Great!';
    },
  },
};
</script>
