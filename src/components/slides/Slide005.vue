<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <div class="hcenter">
        <div class="hcenter-item">
          <img class="tree tree1" src="@/assets/tree1.png" alt="Tree 1" />
          <img class="tree tree2" src="@/assets/tree2.png" alt="Tree 2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide005',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Estructura del proyecto'
    }
  }
}
</script>

<style lang="less" scoped>
.tree {
  vertical-align: top;
  margin-top: 32px;
  width: 16vw;
  margin-left: 32px;
  margin-right: 32px;
}
</style>
