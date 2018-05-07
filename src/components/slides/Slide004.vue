<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <ol class="first-steps step" :class="{ visible: step == 1 }">
        <li>Instalar vue-cli:
          <div class="hcenter">
            <img class="cli-install" src="@/assets/cli_install.png" alt="Vue-cli install" />
          </div>
        </li>
      </ol>
      <ol class="first-steps step" start="2" :class="{ visible: step == 2 }">
        <li>Elegir una plantilla:
          <div class="hcenter">
            <img class="cli-list" src="@/assets/vuelist.png" alt="Vue-cli list templates" />
          </div>
        </li>
      </ol>
      <ol class="first-steps step" start="3" :class="{ visible: step == 3 }">
        <li>Instalar una plantilla y seguir sus pasos de configuración:
          <div class="hcenter">
            <img class="cli-init" src="@/assets/vueinit.png" alt="Vue-cli init template" />
          </div>
        </li>
      </ol>
      <ol class="first-steps step" start="4" :class="{ visible: step == 4 }">
        <li>Compilar y empezar a desarrollar:
          <div class="hcenter">
            <img class="cli-init-finish" src="@/assets/vueinitfinish.png" alt="Vue-cli init finish" />
            <img class="cli-compile" src="@/assets/compile.png" alt="Vue-cli compile" />
          </div>
        </li>
      </ol>
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
      title: 'Creando un proyecto Vue.js desde cero'
    }
  }
}
</script>

<style lang="less" scoped>
.first-steps {
  position: absolute;
  width: 90%;
}
.cli-install {
  height: 30vw;
}
.cli-list {
  margin-top: 32px;
  width: 80vw;
}
.cli-init {
  margin-top: 32px;
  width: 80vw;
}
.cli-init-finish {
  margin-top: 32px;
  width: 80vw;
}
.cli-compile {
  margin-top: 32px;
  width: 60vw;
}
</style>
