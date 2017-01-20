/**
* @Author: zhouchunjie
* @Date:   2017-01-19T16:34:10+08:00
* @Last modified by:   zhouchunjie
* @Last modified time: 2017-01-21T01:45:23+08:00
*/

export const STORAGE_KEY = 'todo-list'

export const state = {
  todos: []
}

export const mutations = {
  addTodo(state, {task}){
    state.todos.push({
      task,
      done:false
    })
  },
  deleteTodo(state, todo){
    state.todos.splice(state.todos.indexOf(todo), 1)
  }
}
