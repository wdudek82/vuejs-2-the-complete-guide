<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name: {{ myName }}</p>
    <p>User age: {{ age }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../../main';

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
    return {
      age: this.myAge,
    };
  },
  created() {
    // eventBus.$on('ageWasEdited', (age) => { this.age = age });
    eventBus.$on('ageWasEditedByMethod', (age) => {
      this.age = age;
    });
  },
  methods: {},
};
</script>

<style scoped>
div.component {
  background: lightcoral;
}
</style>
