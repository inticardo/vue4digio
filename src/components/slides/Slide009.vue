<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <ul class="options step" :class="{ visible: step == 1 }">
        <li><code>data</code>:<pre>

          data () {
            return {
              var1: 'hello',
              var2: 0,
              var3: {
                attr1: 'test'
                attr2: ['a', 'b', 'c']
              }
            }
          }
        </pre>
        </li>
      </ul>
      <ul class="options step" :class="{ visible: step == 2 }">
        <li><code>props</code>:<pre>

          props: {
            text: { type: String, required: true },
            anumber: { type: Number, default: 7 },
            obj: { type: Object, default: () => ({ 'attr1': 'value1' }) },
            arr: { type: Array, default: () => [1, 2, 3] }
          }
        </pre>
        </li>
      </ul>
      <ul class="options step" :class="{ visible: step == 3 }">
        <li><code>methods</code>:<pre>

          methods: {
            myMethod (var) {
              return var * this.var1
            },
            otherMethod (var) {
              return this.myMethod(var + 1)
            }
          }
        </pre>
        </li>
      </ul>
      <ul class="options step" :class="{ visible: step == 4 }">
        <li><code>computed</code>:<pre>

          computed: {
            computedProperty () {
              return this.var1 * this.var2
            }
          }
        </pre>
        </li>
      </ul>
      <ul class="options step" :class="{ visible: step == 5 }">
        <li><code>watch</code>:<pre>

          watch: {
            var2 (val, oldVal) {
              console.log('new: %s, old: %s', val, oldVal)
            }
          }
        </pre>
        </li>
      </ul>
      <ul class="options step" :class="{ visible: step == 6 }">
        <li><code>mixins</code> / <code>extends</code>:<pre>

          mixins: [BaseComponent, OtherBaseComponent],
          extends: OtherComponent
        </pre>
        </li>
      </ul>
      <ul class="options step" :class="{ visible: step == 7 }">
        <li><code>components</code>:<pre>

          components: {
            ImportedComponent,
            RenamedComponent: OtherComponent
          }
        </pre>
        </li>
      </ul>
      <ul class="options step" :class="{ visible: step == 8 }">
        <li>Lifecycle hooks:<pre>

          created () {
            console.log('I\'m alive!')
          },
          mounted () {
            console.log('Component mounted!')
          },
          beforeDestroy () {
            console.log('Everyone dies someday...')
          }
        </pre>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide009',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Opciones de un componente'
    }
  }
}
</script>

<style lang="less" scoped>
.options {
  position: absolute;
  width: 90%;
}
pre {
  background-color: #000;
  color: #fff;
}
</style>
