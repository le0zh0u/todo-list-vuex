/**
* @Author: zhouchunjie
* @Date:   2017-01-19T16:34:10+08:00
* @Last modified by:   zhouchunjie
* @Last modified time: 2017-01-21T11:58:47+08:00
*/

export const STORAGE_KEY = 'todo-list'

export const state = {
  todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

export const mutations = {
  addTodo(state, {task}){
    state.todos.push({
      task,
      done: false
    })
  },
  deleteTodo(state, todo){
    console.log("delete todo -> " + todo.task);
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  toggleTodo(state, todo){
    todo.done = !todo.done
  }
}
