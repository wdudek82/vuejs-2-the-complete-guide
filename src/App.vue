<template>
  <div id="app" class="container">
    <app-header />
    <Servers />
    <app-footer />
  </div>
</template>

<script>

import AppHeader from './components/ui/AppHeader';
import Servers from './components/servers/Servers';
import AppFooter from './components/ui/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    Servers,
    AppFooter,
  },
};
</script>

<style>
</style>
