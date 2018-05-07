<template>
  <div class="slide">
    <div class="slide-inner">
      <div class="vcenter">
        <div class="hcenter">
          <div class="hcenter-item">
            <h2>{{ title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide001',
  mixins: [BaseSlide],
  data () {
    return {
      title: '¿Vue.js?'
    }
  }
}
</script>

<style lang="less" scoped>
h2 {
  font-size: 300%;
}
</style>
