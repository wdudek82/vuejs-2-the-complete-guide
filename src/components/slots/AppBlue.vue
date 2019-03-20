<template>
  <div class="color-box blue">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'Blue',
  activated() {
    console.log('AppBlue activated!');
  },
  deactivated() {
    console.log('AppBlue deactivated!');
  },
  destroyed() {
    console.log('AppBlue destroyed!');
  },
};
</script>

<style scoped>
.blue {
  border-color: blue;
  background: lightblue;
}
</style>
