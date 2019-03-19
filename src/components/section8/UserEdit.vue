<template xmlns:v-model="http://www.w3.org/1999/xhtml">
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <label for="age">Age</label>
    <input id="age" v-model="age" type="number" name="age" />
    <button @click="editAge(age)">Edit age</button>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  props: {
    myAge: {
      type: Number,
      required: true,
    },
    editAge: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      age: this.myAge,
    };
  },
};
</script>

<style scoped>
div.component {
  background: lightgreen;
}
</style>
