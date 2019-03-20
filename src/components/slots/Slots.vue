<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="setActiveComponent('AppBlue', 'I\'m blue!')">
          Load Blue Template
        </button>
        <button class="btn btn-success" @click="setActiveComponent('AppGreen', 'I\'m green!')">
          Load Green Template
        </button>
        <button class="btn btn-danger" @click="setActiveComponent('AppRed', 'I\'m red!')">
          Load Red Template
        </button>
        <hr />

        <keep-alive>
          <component :is="activeComponent">{{ message }}</component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import AppRed from './AppRed.vue';
import AppGreen from './AppGreen.vue';
import AppBlue from './AppBlue.vue';

export default {
  name: 'Slots',
  components: {
    AppRed,
    AppGreen,
    AppBlue,
  },
  data() {
    return {
      activeComponent: null,
      message: 'Default message',
    };
  },
  methods: {
    setActiveComponent(component, msg) {
      this.activeComponent = component;
      this.message = msg;
    },
  },
};
</script>

<style>
.color-box {
  border: 1px solid #ccc;
  background-color: #eee;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
  transition: all 1000ms ease-in-out;
}
</style>
