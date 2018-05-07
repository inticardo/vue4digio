<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <div class="left">
        <ul>
          <li><ReverseText text="Hola, esto es una prueba" ></ReverseText></li>
          <li><ReverseText text="Hola, esto es otra prueba" /></li>
          <li><reverse-text text="Hola, esto es otra prueba más" /></li>
          <li><reverse-text :text="title" /></li>
        </ul>
      </div>
      <div class="right">
        <img class="propscode" src="@/assets/propscode.png" alt="Props code" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
import ReverseText from '@/components/ReverseText'
export default {
  name: 'Slide014',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Atributos de componente (props)'
    }
  },
  components: {
    ReverseText
  }
}
</script>

<style lang="less" scoped>
.left {
  margin-top: 32px;
  float: left;
  width: 48%;
  button {
    font-size: 200%;
    padding: 32px;
  }
}
.right {
  float: right;
  width: 48%;
}
.propscode {
  vertical-align: top;
  margin-top: 16px;
  height: 65vh;
}
</style>
