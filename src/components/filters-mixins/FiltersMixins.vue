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
        <hr />
        <input v-model="filterText" />
        <ul>
          <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';

export default {
  name: 'FilterMixins',
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  mixins: [
    fruitMixin,
  ],
  created() {
    console.log('Created inside FiltersMixins component');
  },
};
</script>

<style scoped></style>
