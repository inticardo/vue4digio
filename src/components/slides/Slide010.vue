<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <div class="hcenter">
        <div class="hcenter-item">
          <img class="lifecycle"
            src="@/assets/lifecycle1.png"
            alt="Lifecycle 1" />
          <img class="lifecycle"
            src="@/assets/lifecycle2.png"
            alt="Lifecycle 2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide010',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Ciclo de vida de un componente'
    }
  }
}
</script>

<style lang="less" scoped>
.lifecycle {
  vertical-align: top;
  margin-top: 16px;
  width: 30vw;
}
</style>
