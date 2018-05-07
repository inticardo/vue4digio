<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <div class="hcenter step evanyou" :class="{ visible: step >= 4 }">
        <div class="hcenter-item">
          <img class="evanyou-photo" src="@/assets/evanyou.png" alt="Evan You" />
        </div>
      </div>
      <ul class="frameworks">
        <li class="step" :class="{ visible: step >= 1 }"><img class="angular-logo" src="@/assets/angular.svg" alt="AngularJS" /> - <img class="google-logo" src="@/assets/google.svg" alt="Google" /></li>
        <li class="step" :class="{ visible: step >= 2 }"><img class="react-logo" src="@/assets/react.svg" alt="ReactJS" /> - <img class="facebook-logo" src="@/assets/facebook.svg" alt="Facebook" /></li>
        <li class="step" :class="{ visible: step >= 3 }"><img class="vue-logo" src="@/assets/logo.png" alt="VueJS" /> - ¿?</li>
      </ul>
      <div class="hcenter step figured" :class="{ visible: step >= 5 }">
        <div class="hcenter-item">
          <blockquote>I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight without all the extra concepts involved?</blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide002',
  mixins: [BaseSlide],
  data () {
    return {
      title: '¿Quién está detrás de Vue.js?'
    }
  }
}
</script>

<style lang="less" scoped>
  img {
    &.angular-logo, &.google-logo, &.react-logo, &.facebook-logo, &.vue-logo {
      height: 100px;
      vertical-align: middle;
    }
    &.evanyou-photo {
      height: 65vh;
    }
  }
  .hcenter {
    position: absolute;
    left: 50%;
    .hcenter-item {
      position: relative;
      left: -50%;
    }
  }
  .figured blockquote {
    margin-top: -10px;
    background-color: #fff;
    border: 4px solid #000;
    border-radius: 32px;
    padding: 16px;
    &::before {
      content: '“'
    }
    &::after {
      content: '”'
    }
  }
</style>
