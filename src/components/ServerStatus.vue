<template>
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus('Green')">Green</button>
    <button @click="changeStatus('Orange')">Orage</button>
    <button @click="changeStatus('Red')">Red</button>
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
    changeStatus(status) {
      this.status = status;
    },
  },
};
</script>
