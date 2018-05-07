<script>
import { ADD_NUMBER } from '@/store/mutation-types'
export default {
  name: 'NumberGenerator',
  render (h) {
    return h()
  },
  data () {
    return {
      interval: null,
      intervalTime: 1
    }
  },
  created () {
    var iterator = this.primeIterator()
    this.interval = setInterval(() => {
      iterator.next()
    }, this.intervalTime)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    primeIterator: function* () {
      for (let i = this.$store.getters.lastNumber + 2; ; i += 2) {
        let isPrime = true
        for (let j = this.$store.state.numbers.length - 2; j >= 0; j--) {
          let previous = this.$store.state.numbers[j]
          if (i % previous === 0) {
            isPrime = false
            break
          }
          yield isPrime
        }
        if (isPrime) {
          this.$store.commit(ADD_NUMBER, i)
        }
      }
    }
  }
}
</script>
