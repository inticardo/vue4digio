<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <ul class="incrementally prestep" :class="{ visible: step == 0 }">
        <li>Plantilla base:<pre>

          &lt;div id="app"&gt;
            &lt;h1&gt;Vue.js test&lt;/h1&gt;
            &lt;input type="text" v-model="message" /&gt;
            &lt;div&gt;Mensaje: "{{ message }}"&lt;/div&gt;
          &lt;/div&gt;
        </pre>
        </li>
      </ul>
      <ul class="incrementally step" :class="{ visible: step == 1 }">
        <li>Cargamos el core:<pre>

          &lt;script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"&gt;
          &lt;/script&gt;
        </pre>
        </li>
      </ul>
      <ul class="incrementally step" :class="{ visible: step == 2 }">
        <li>Instanciamos Vue:<pre>

          &lt;script&gt;
          var app = new Vue({
            el: '#app',
            data: function() {
              return {
                message: ''
              };
            }
          });
          &lt;/script&gt;
        </pre>
        </li>
      </ul>
      <ul class="incrementally step" :class="{ visible: step == 3 }">
        <li>Y listo:
          <div class="hcenter">
            <img class="helloworld" src="@/assets/helloworld.png" alt="Browser code" />
          </div>
        </li>
      </ul>
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
      title: '« Incrementally adoptable »'
    }
  }
}
</script>

<style lang="less" scoped>
.incrementally {
  position: absolute;
  width: 90%;
}
pre {
  background-color: #000;
  color: #fff;
}
.helloworld {
  width: 40%;
}
</style>
