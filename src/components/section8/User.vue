<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name</button>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
            :my-name="name"
            :my-age="age"
            :reset-name="resetName"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
            :my-age="age"
        ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';

export default {
  name: 'User',
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
  data() {
    return {
      name: 'Max',
      age: 27,
    };
  },
  methods: {
    changeName() {
      this.name = 'Anna';
    },
    resetName() {
      this.name = 'Max';
    },
  },
};
</script>

<style scoped>
div {
  background: lightblue;
}
</style>
