<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <div class="hcenter">
        <div class="hcenter-item">
          <img class="component-example"
            src="@/assets/component1.png"
            alt="Component example 1" />
          <img class="component-example"
            src="@/assets/component2.png"
            alt="Component example 2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide008',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Secciones de un componente'
    }
  }
}
</script>

<style lang="less" scoped>
.component-example {
  vertical-align: top;
  margin-top: 32px;
  width: 35vw;
}
</style>
