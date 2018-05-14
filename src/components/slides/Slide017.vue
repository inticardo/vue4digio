<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <div class="hcenter">
        <div class="hcenter-item">
          <img class="propscomponent" src="@/assets/propscomponent.png" alt="Props component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide017',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Definición de atributos de componente'
    }
  }
}
</script>

<style lang="less" scoped>
.propscomponent {
  margin-top: 32px;
  width: 40vw;
}
</style>
