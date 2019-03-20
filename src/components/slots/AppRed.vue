<template>
  <div class="color-box red">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Red',
};
</script>

<style scoped>
.red {
  border-color: red;
  background: lightcoral;
}
</style>
