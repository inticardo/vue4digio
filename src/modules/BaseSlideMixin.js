import EventBus from '@/modules/EventBus'
import { SET_GIANT_HOME_NUMBER } from '@/store/mutation-types'
export default {
  data () {
    return {
      lastStep: 0,
      step: 0
    }
  },
  created () {
    this.disableGlobalHandlers()
  },
  mounted () {
    this.lastStep = this.$el.querySelectorAll('.step').length
    this.enableGlobalHandlers()
  },
  beforeDestroy () {
    this.disableGlobalHandlers()
  },
  methods: {
    disableGlobalHandlers () {
      EventBus.$off('nextSlide')
      EventBus.$off('prevSlide')
    },
    enableGlobalHandlers () {
      EventBus.$on('nextSlide', this.next)
      EventBus.$on('prevSlide', this.prev)
    },
    hasMoreSteps () {
      return this.lastStep > 0 && this.step < this.lastStep
    },
    nextStep () {
      if (this.hasMoreSteps()) {
        this.step++
        this.$emit('step', this.step)
      }
    },
    prevStep () {
      if (this.step > 0) {
        this.step--
        this.$emit('step', this.step)
      }
    },
    next () {
      if (!this.hasMoreSteps()) {
        this.$store.commit(SET_GIANT_HOME_NUMBER, false)
        this.$router.push(this.$route.meta.nextSlide)
        return
      }
      this.nextStep()
    },
    prev () {
      if (this.step === 0) {
        this.$store.commit(SET_GIANT_HOME_NUMBER, false)
        this.$router.push(this.$route.meta.prevSlide)
        return
      }
      this.prevStep()
    }
  }
}
