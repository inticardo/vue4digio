<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <ul class="addons">
        <li>Añadir un preprocesador CSS (less):
          <div><img class="addingless" src="@/assets/addingless.png" alt="Adding less" /></div>
          <div><img class="usingless" src="@/assets/usingless.png" alt="Using less" /></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide018',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Añadiendo utilidades'
    }
  }
}
</script>

<style lang="less" scoped>
.addons {
  .addingless {
    width: 50vw;
    margin-top: 16px;
  }
  .usingless {
    width: 25vw;
  }
}
</style>
