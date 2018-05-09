<template>
  <div class="slide">
    <div class="slide-inner">
     <h2>{{ title }}</h2>
      <ul class="vuex">
        <li class="step" :class="{ visible: step >= 1 }"><a href="https://ssr.vuejs.org/">Vue Server Renderer</a></li>
        <li class="step" :class="{ visible: step >= 2 }"><a href="https://nuxtjs.org/">Nuxt.js</a></li>
        <li class="step" :class="{ visible: step >= 3 }"><a href="https://vuepress.vuejs.org/">VuePress</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide019',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Algunos recursos interesantes'
    }
  }
}
</script>

<style lang="less" scoped>
</style>
