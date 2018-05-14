<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <ul class="vuex">
        <li class="step" :class="{ visible: step >= 1 }">Manejador de datos de aplicación</li>
        <li class="step" :class="{ visible: step >= 2 }">Integrado con Vue.js</li>
        <li class="step" :class="{ visible: step >= 3 }">Reactivo, depurable, modular...</li>
      </ul>
      <div class="step"></div>
      <div class="step prime-number prime-number-1" :class="{ visible: step >= 5 }">
        {{ mysteriousNumber }}
      </div>
      <div class="step prime-number prime-number-2" :class="{ visible: step >= 6 }">
        {{ mysteriousNumber }}
      </div>
      <div class="step prime-number prime-number-3" :class="{ visible: step >= 7 }">
        <ul>
          <li v-for="(prime, index) in primeList" :key="index">{{ prime }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
import { SET_GIANT_HOME_NUMBER } from '@/store/mutation-types'
export default {
  name: 'Slide020',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Solo un poco sobre Vuex'
    }
  },
  created () {
    this.$off('step', this.onStep)
    this.$on('step', this.onStep)
  },
  beforeDestroy () {
    this.$off('step', this.onStep)
  },
  methods: {
    onStep (step) {
      switch (step) {
        case 3:
          this.$store.commit(SET_GIANT_HOME_NUMBER, false)
          break
        case 4:
          this.$store.commit(SET_GIANT_HOME_NUMBER, true)
          break
      }
    }
  },
  computed: {
    mysteriousNumber () {
      return this.$store.getters.lastNumber
    },
    primeList () {
      return this.$store.getters.last20
    }
  }
}
</script>

<style lang="less" scoped>
.prime-number {
  font-size: 150%;
  font-weight: bold;
  color: #f00;
  &.prime-number-1 {
    position: absolute;
    top: 300px;
    left: 200px;
  }
  &.prime-number-2 {
    position: absolute;
    top: 600px;
    left: 700px;
  }
  &.prime-number-3 {
    font-size: 80%;
    position: absolute;
    top: 0;
    right: 200px;
  }
}
</style>
