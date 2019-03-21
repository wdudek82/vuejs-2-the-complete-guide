<template
    xmlns:v-highlight="http://www.w3.org/1999/xhtml"
    xmlns:v-local-highlight="http://www.w3.org/1999/xhtml"
    xmlns:v-myon="http://www.w3.org/1999/xhtml"
>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Filters & Mixins</h2>
        <p>{{ text | toUppercase }}</p>
        <p>{{ secondText | toLowercase }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterMixins',
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  data() {
    return {
      text: 'Hello there!',
      secondText: 'Hello from second text!',
    };
  },
};
</script>

<style scoped>

</style>
