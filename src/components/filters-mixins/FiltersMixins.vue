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
        <p>{{ secondText | reverseString }}</p>
        <p>{{ secondText | countLetters }}</p>
        <p>{{ revStr }}</p>
        <p>{{ countChar }}</p>
        <hr />
        <button @click="fruits.push('Berries')">Add New Item</button>
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
    reverseString(string) {
      return string.split('').reverse().join('');
    },
  },
  mixins: [
    fruitMixin,
  ],
  data() {
    return {
      dummyText: 'Brown Fox jumped over the Lazy Dog',
    };
  },
  computed: {
    revStr() {
      return this.dummyText.split('').reverse().join('');
    },
  },
  created() {
    console.log('Created inside FiltersMixins component');
  },
};
</script>

<style scoped></style>
