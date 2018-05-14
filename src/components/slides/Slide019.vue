<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <ul class="addons">
        <li>Añadir un manejador de estado de aplicación (Vuex):
          <div><img class="addingvuex" src="@/assets/addingvuex.png" alt="Adding Vuex" /></div>
          <div><img class="usingvuex" src="@/assets/usingvuex.png" alt="Using Vuex" /></div>
        </li>
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
      title: 'Añadiendo utilidades'
    }
  }
}
</script>

<style lang="less" scoped>
.addons {
  .addingvuex {
    width: 30vw;
    margin-top: 16px;
  }
  .usingvuex {
    width: 55vw;
  }
}
</style>
