<template
    xmlns:v-highlight="http://www.w3.org/1999/xhtml"
    xmlns:v-local-highlight="http://www.w3.org/1999/xhtml"
    xmlns:v-myon="http://www.w3.org/1999/xhtml"
>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Built-in Directives</h2>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h2>Custom Directives</h2>
        <p v-highlight:color.delayed="'orange'">Color this</p>
        <p
            v-local-highlight:background.delayed.blink="{
            mainColor: 'orange',
            secondColor: 'green',
            interval: 500,
          }"
        >
          Color this locally
        </p>
        <button v-myon:click="foo">
          Button
        </button>
        <button
            v-myon:mouseover="foo"
        >
          Mouse over me!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDirectives',
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        let delay = 0;

        if (binding.modifiers['delayed']) {
          delay = 3000;
        }

        if (binding.modifiers['blink']) {
          const { mainColor, secondColor, interval } = binding.value;
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              if (currentColor === secondColor) {
                currentColor = mainColor;
              } else {
                currentColor = secondColor;
              }

              if (binding.arg == 'background') {
                el.style.background = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, interval);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.background = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      },
    },
    myon: {
      bind(el, binding, vnode) {
        const eventType = binding.arg;
        const callback = binding.value;

        el.addEventListener(eventType, callback);
      },
    },
  },
  methods: {
    foo() {
      console.log('Bar');
    },
  },
};
</script>

<style scoped></style>
