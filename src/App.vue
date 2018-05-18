<template>
  <div id="app">
    <number-generator />
    <div class="header">
      <h1><router-link to="/"><img src="@/assets/logo.png" alt="V" />ue4digio · {{ talkDate }}</router-link></h1>
    </div>
    <div class="content">
      <transition :enter-active-class="invertedTransition ? 'fadeInLeftBig' : 'fadeInRightBig'"
                  :leave-active-class="invertedTransition ? 'fadeOutRightBig' : 'fadeOutLeftBig'">
        <router-view/>
      </transition>
    </div>
    <div class="random" :class="{ giant: giantNumber }">
      {{ mysteriousNumber }}
    </div>
  </div>
</template>

<script>
import NumberGenerator from '@/components/NumberGenerator'
import EventBus from '@/modules/EventBus'
import { INVERT_TRANSITION } from '@/store/mutation-types'

export default {
  name: 'App',
  data () {
    return {
      talkDate: '2018-05-17'
    }
  },
  created () {
    document.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 33: case 37: case 38: // pg up || left || up
          this.prevSlide()
          break
        case 34: case 39: case 40: // pg down || right || down
          this.nextSlide()
          break
      }
      event.preventDefault()
    }, false)
  },
  methods: {
    nextSlide () {
      // this.$store.state.invertedTransition = false
      this.$store.commit(INVERT_TRANSITION, false)
      EventBus.$emit('nextSlide')
    },
    prevSlide () {
      // this.$store.state.invertedTransition = true
      this.$store.commit(INVERT_TRANSITION, true)
      EventBus.$emit('prevSlide')
    }
  },
  computed: {
    invertedTransition () {
      return this.$store.state.invertedTransition
    },
    mysteriousNumber () {
      return this.$store.getters.lastNumber
    },
    giantNumber () {
      return this.$store.state.giantHomeNumber
    }
  },
  components: {
    NumberGenerator
  }
}
</script>

<style lang="less" src="./App.less"></style>
