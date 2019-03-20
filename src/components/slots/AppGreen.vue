<template>
  <div class="color-box green">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'Green',
};
</script>

<style scoped>
.green {
  border-color: green;
  background: lightgreen;
}
</style>
