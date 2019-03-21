<template>
  <div id="app">
    <!--<app-directives></app-directives>-->
    <filters-mixins></filters-mixins>
    <app-list></app-list>
  </div>
</template>

<script>
// import AppDirectives from './components/directives/AppDirectives';
import FiltersMixins from './components/filters-mixins/FiltersMixins';
import AppList from './components/filters-mixins/List';

export default {
  name: 'App',
  components: {
    // AppDirectives,
    FiltersMixins,
    AppList,
  },
};
</script>

<style>
.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
