<template>
  <div id="app" class="container">
    <!--<div class="col-xs-12">-->
    <!--<app-user></app-user>-->
    <!--</div>-->
    <!--<servers-main></servers-main>-->
    <slots></slots>
  </div>
</template>

<script>
import User from './components/section8/User';
import ServersMain from './components/servers/ServersMain';
import Slots from './components/slots/Slots.vue';

export default {
  name: 'App',
  components: {
    appUser: User,
    ServersMain,
    Slots,
  },
};
</script>

<style>
.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
