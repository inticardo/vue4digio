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
  name: 'Slide004',
  mixins: [BaseSlide],
  data () {
    return {
      title: '« Incrementally adoptable »'
    }
  }
}
</script>

<style lang="less" scoped>
</style>
