<template>
  <div id="app" class="container">
    <handling-forms></handling-forms>
  </div>
</template>

<script>
import HandlingForms from './components/handling-forms/HandlingForms';

export default {
  name: 'App',
  components: {
    HandlingForms,
  },
};
</script>

<style>
.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
