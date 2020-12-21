import { createStore } from 'vuex'

export default createStore({
  state: {
    items4: [],
    items5: [],
    items6: []
  },
  mutations: {
    addItem4 (state, item) {
      state.items4.push(item)
    },
    addItem5 (state, item) {
      state.items5.push(item)
    },
    addItem6 (state, item) {
      state.items6.push(item)
    }
  }
})
