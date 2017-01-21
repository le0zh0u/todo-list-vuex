/**
* @Author: zhouchunjie
* @Date:   2017-01-19T16:33:50+08:00
* @Last modified by:   zhouchunjie
* @Last modified time: 2017-01-21T11:55:54+08:00
*/

import Vue from 'vue'
import Vuex from 'vuex'
import {state, mutations} from './mutations'
import plugins from './plugins'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  plugins
})
