import Vue from 'vue'
import Vuex from 'vuex'
import {
  INVERT_TRANSITION,
  ADD_NUMBER,
  SET_GIANT_HOME_NUMBER
} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    giantHomeNumber: false,
    invertedTransition: false,
    numbers: [3, 2]
  },
  getters: {
    lastNumber (state) {
      if (state.numbers.length > 0) {
        return state.numbers[0]
      }
      return null
    },
    last20 (state) {
      return state.numbers.slice(0, 20)
    }
  },
  mutations: {
    [INVERT_TRANSITION] (state, value) {
      state.invertedTransition = value
    },
    [ADD_NUMBER] (state, number) {
      state.numbers.unshift(number)
    },
    [SET_GIANT_HOME_NUMBER] (state, value) {
      state.giantHomeNumber = value
    }
  },
  actions: {
  }
})
