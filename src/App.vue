<template>
  <div id="app">
    <!--<app-directives></app-directives>-->
    <!--<filters-mixins></filters-mixins>-->
    <!--<app-list></app-list>-->
    <app-animations-transitions></app-animations-transitions>
  </div>
</template>

<script>
// import AppDirectives from './components/directives/AppDirectives';
// import FiltersMixins from './components/filters-mixins/FiltersMixins';
// import AppList from './components/filters-mixins/List';
import AnimationsTransitions from './components/animations-transitions/AnimationsTransitions';

export default {
  name: 'App',
  components: {
    // AppDirectives,
    // FiltersMixins,
    // AppList,
    appAnimationsTransitions: AnimationsTransitions,
  },
};
</script>

<style>
.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
