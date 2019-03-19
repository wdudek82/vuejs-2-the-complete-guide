<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name: {{ myName }}</p>
    <p>User age: {{ myAge }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  props: {
    myName: {
      type: String,
      required: true,
    },
    myAge: {
      type: Number,
      required: true,
    },
    resetName: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
div.component {
  background: lightcoral;
}
</style>
