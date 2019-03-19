<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
