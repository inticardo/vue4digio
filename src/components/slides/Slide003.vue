<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <div class="vcenter">
        <div class="hcenter">
          <div class="hcenter-item">
            <img class="ecosystem" src="@/assets/ecosystem.png" alt="Ecosystem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide003',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Ecosistema'
    }
  }
}
</script>

<style lang="less" scoped>
.ecosystem {
  width: 80vw;
}
</style>
