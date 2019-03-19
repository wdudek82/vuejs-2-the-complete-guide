<template>
  <li class="list-group-item">
    Server #{{ serverId }}
  </li>
</template>

<script>
export default {
  name: 'Server',
  props: {
    serverId: {
      type: Number,
      required: true,
      default: null,
    },
  },
};
</script>

<style scoped></style>
