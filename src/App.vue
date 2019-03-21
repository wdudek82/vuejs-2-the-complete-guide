<template>
  <div id="app">
    <!--<app-directives></app-directives>-->
    <filters-mixins></filters-mixins>
  </div>
</template>

<script>

import AppDirectives from './components/directives/AppDirectives';
import FiltersMixins from './components/filters-mixins/FiltersMixins';

export default {
  name: 'App',
  components: {
    AppDirectives,
    FiltersMixins,
  },
};
</script>

<style>
.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
