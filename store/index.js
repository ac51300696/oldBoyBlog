import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    rawHtml: '',
    renderHtml: ''
  },
  mutations: {
    MARKDOWN_SUCCESS (state, data) {
        state.rawHtml = data.old
        // state.renderHtml = data.new
    }
  },
  getters: {
		getRawHtml: (state) => state.rawHtml,
		getRenderHtml: (state) => state.renderHtml
  }
})

export default store