<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />
        <select v-model="alertAnimation" class="form-control mb-2">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <button class="btn btn-primary" @click="showAlert = !showAlert">
          Show Alert
        </button>
        <br />
        <br />
        <transition :name="alertAnimation" type="transition" appear>
          <div v-if="showAlert" class="alert alert-info">First</div>
        </transition>
        <transition
          name=""
          appear
          appear-to-class="animated bounceInRight"
        >
          <div v-if="showAlert" class="alert alert-info">Second</div>
        </transition>
        <transition-group :name="alertAnimation" mode="out-in">
          <div v-if="showAlert" :key="'thirda'" class="alert alert-info">
            Third A
          </div>
          <div v-else :key="'thirdb'" class="alert alert-warning">
            Third B
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimationsTransitions',
  data() {
    return {
      showAlert: true,
      alertAnimation: 'fade',
    };
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all 300ms ease-in-out;
}

.fade-leave {
}

.fade-leave-active {
  opacity: 0;
  transform: scale(0.5);
  transition: all 300ms ease-in-out;
}

.slide-enter {
}

.slide-enter-active {
  animation: slide-in 700ms ease-in-out forwards;
  animation-direction: normal;
  transition: all 300ms ease-in-out;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 300ms ease-in-out forwards;
  transition: all 300ms ease-in-out;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
