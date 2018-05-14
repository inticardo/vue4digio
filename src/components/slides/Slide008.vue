<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <ul class="files step" :class="{ visible: step == 1 }">
        <li><code>./index.html</code>
          <div class="hcenter">
            <img class="indexhtml" src="@/assets/index.png" alt="index.html" />
          </div>
        </li>
      </ul>
      <ul class="files step" :class="{ visible: step == 2 }">
        <li><code>./src/main.js</code>
          <div class="hcenter">
            <img class="mainjs" src="@/assets/main.png" alt="main.js" />
          </div>
        </li>
      </ul>
      <ul class="files step" :class="{ visible: step == 3 }">
        <li><code>./src/App.vue</code>
          <div class="hcenter">
            <img class="appvue" src="@/assets/vueapp.png" alt="app.vue" />
          </div>
        </li>
      </ul>
      <ul class="files step" :class="{ visible: step == 4 }">
        <li><code>./src/router/index.js</code>
          <div class="hcenter">
            <img class="routerjs" src="@/assets/router.png" alt="router.js" />
          </div>
        </li>
      </ul>
      <ul class="files step" :class="{ visible: step == 5 }">
        <li><code>./src/components/HelloWorld.vue</code>
          <div class="hcenter">
            <img class="hellovue" src="@/assets/hello.png" alt="hello.vue" />
          </div>
        </li>
      </ul>
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
      title: 'Archivos clave'
    }
  }
}
</script>

<style lang="less" scoped>
.files {
  position: absolute;
  width: 90%;
}
.indexhtml {
  margin-top: 32px;
  width: 70vw;
}
.mainjs {
  margin-top: 32px;
  width: 60vw;
}
.appvue {
  margin-top: 16px;
  width: 34vw;
}
.routerjs {
  margin-top: 32px;
  width: 40vw;
}
.hellovue {
  margin-top: 32px;
  width: 45vw;
}
</style>
