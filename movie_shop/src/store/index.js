import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isshow: true,
    comingList: []
  },
  mutations: {
    HideTabber (state, data) {
      state.isshow = data
    },
    ShowTabber (state, data) {
      state.isshow = data
    },
    comingListMutation (state, data) {
      state.comingList = data
    }
  },
  actions: {
    getComingListAction (store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8784793',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1598099661919458008793092","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data)
        store.commit('comingListMutation', res.data.data.films)
      })
    }
  },
  modules: {
  }
})
