<template>
  <div class="col-xs-12">
    <app-header></app-header>
    <servers></servers>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../ui/AppHeader';
import Servers from './Servers';
import AppFooter from '../ui/AppFooter';

export default {
  name: 'ServersMain',
  components: {
    AppHeader,
    Servers,
    AppFooter,
  },
};
</script>

<style scoped>

</style>
