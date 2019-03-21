<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Built-in Directives</h2>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Custom Directives</h2>
        <p v-highlight:color.delayed="'orange'">Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDirectives',
};
</script>

<style scoped></style>
