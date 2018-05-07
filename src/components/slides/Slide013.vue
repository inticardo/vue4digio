<template>
  <div class="slide">
    <div class="slide-inner">
      <h2>{{ title }}</h2>
      <div class="left">
        <button type="button" @click="buttonClick">
          ¡Púlsame!
        </button>
      </div>
      <div class="right">
        <img class="eventscode" src="@/assets/eventscode.png" alt="Events code" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseSlide from '@/modules/BaseSlideMixin'
export default {
  name: 'Slide013',
  mixins: [BaseSlide],
  data () {
    return {
      title: 'Eventos'
    }
  },
  methods: {
    buttonClick () {
      this.title += ' (click)'
    }
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
  margin-top: -70px;
  float: right;
  width: 48%;
}
.eventscode {
  vertical-align: top;
  margin-top: 16px;
  height: 70vh;
}
</style>
