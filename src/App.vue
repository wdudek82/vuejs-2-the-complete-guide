<template>
  <div id="app" class="container">
    <div class="col-xs-12">
      <app-user></app-user>
    </div>
  </div>
</template>

<script>
import User from './components/section8/User';

export default {
  name: 'App',
  components: {
    appUser: User,
  },
};
</script>

<style>
.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
