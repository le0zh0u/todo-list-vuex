/**
* @Author: zhouchunjie
* @Date:   2017-01-21T11:52:38+08:00
* @Last modified by:   zhouchunjie
* @Last modified time: 2017-01-21T11:56:29+08:00
*/
import { STORAGE_KEY } from './mutations'
import createLogger from 'vuex/dist/logger'

const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
