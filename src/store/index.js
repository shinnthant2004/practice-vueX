import Vue from 'vue'
import Vuex from 'vuex'
import Todos from '@/store/modules/Todos'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{Todos}
})
// state: {
// },
// getters: {
// },
// mutations: {
// },
// actions: {
// },
// modules: {
// }