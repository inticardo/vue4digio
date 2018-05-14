<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <div class="left">
        <input type="text" v-model="input" />
        <p>Valor del input: <br />"{{ input }}"</p>
        <p>Palabras del input:</p>
        <ul>
          <li v-for="(item, index) in words" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="right">
        <img class="reactivecode" src="@/assets/reactivecode.png" alt="Reactive code" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide014',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Programación reactiva',
      input: ''
    }
  },
  computed: {
    words () {
      if (!this.input) return []
      return this.input.split(' ')
    }
  }
}
</script>

<style lang="less" scoped>
.left {
  margin-top: 32px;
  float: left;
  width: 48%;
  input {
    font-size: 130%;
  }
}
.right {
  margin-top: -70px;
  float: right;
  width: 48%;
}
.reactivecode {
  vertical-align: top;
  margin-top: 16px;
  height: 70vh;
}
</style>
