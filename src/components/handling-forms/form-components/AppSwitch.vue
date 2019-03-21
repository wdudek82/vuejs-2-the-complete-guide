<template>
  <div>
    <div id="on" :class="{ active: value }" @click="switched(true)">On</div>
    <div id="off" :class="{ active: !value }" @click="switched(false)">Off</div>
  </div>
</template>

<script>
export default {
  name: 'AppSwitch',
  props: {
    value: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  methods: {
    switched(isOn) {
      this.$emit('input', isOn);
    },
  },
};
</script>

<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover,
#on.active {
  background: lightgreen;
}

#off:hover,
#off.active {
  background: lightcoral;
}
</style>
