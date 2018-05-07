<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <ul class="preview step" :class="{ visible: step == 1 }">
        <li>Resultado mostrado por el navegador:
          <div class="hcenter">
            <img class="browserpreview" src="@/assets/preview.png" alt="Browser preview" />
          </div>
        </li>
      </ul>
      <ul class="preview step" :class="{ visible: step == 2 }">
        <li>Código recibido por el navegador:
          <div class="hcenter">
            <img class="browsercode" src="@/assets/previewcode.png" alt="Browser code" />
          </div>
        </li>
      </ul>
      <ul class="preview step" :class="{ visible: step == 3 }">
        <li>Mirando con el DOM inspector:
          <div class="hcenter">
            <img class="dominspect" src="@/assets/previewdom.png" alt="DOM inspector" />
          </div>
        </li>
      </ul>
      <ul class="preview step" :class="{ visible: step == 4 }">
        <li>Usando las devtools de Vue.js
          <div class="hcenter">
            <img class="vueinspect" src="@/assets/previewdomvue.png" alt="VUE inspector" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide007',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Previsualizando el resultado'
    }
  }
}
</script>

<style lang="less" scoped>
.preview {
  position: absolute;
  width: 90%;
}
.browserpreview {
  margin-top: 32px;
  width: 30vw;
}
.browsercode {
  margin-top: 32px;
  width: 60vw;
}
.dominspect {
  margin-top: 32px;
  width: 40vw;
}
.vueinspect {
  margin-top: 32px;
  width: 70vw;
}
</style>
