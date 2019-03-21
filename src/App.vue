<template>
  <div id="app">
    <app-directives></app-directives>
  </div>
</template>

<script>

import AppDirectives from './components/directives/AppDirectives';

export default {
  name: 'App',
  components: {
    AppDirectives,
  },
};
</script>

<style>
.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
