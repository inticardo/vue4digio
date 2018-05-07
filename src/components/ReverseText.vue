<template>
  <div class="reverse-text">
    {{ reverseText }}
  </div>
</template>

<script>
export default {
  name: 'ReverseText',
  props: {
    text: { type: String, required: true }
  },
  computed: {
    reverseText () {
      return this.text.split('').reverse().join('')
    }
  }
}
</script>
