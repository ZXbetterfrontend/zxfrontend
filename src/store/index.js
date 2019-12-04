import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {

    //这里放全局参数
    name: '',
    gid: ''
  },

  mutations: {
    setname (state, newvalue) {
      state.name = newvalue
    },
    setgid(state, newvalue) {
      state.gid = newvalue
    },
    clearname (state) {
      state.name = ''
    },
    cleargid (state) {
      state.gid = ''
    }
  },

  getters: {        //这里是get方法   
    getname: () => {
      return this.state.name
    },
    getgid: () => {
      return this.state.gid
    }
  },

  actions: {



  },

  modules: {



  }

})

