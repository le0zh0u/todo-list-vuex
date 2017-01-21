<template>
  <li class='todo'>
    <span :class="{'todo-done': todo.done}" @click="toggleTodo">{{todo.task}}</span>
    <button type="button" class="btn btn-danger btn-sm btn-pull-right" @click="deleteTodo">Delete</button>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'todo',
  props: ['todo'],
  methods: {
    deleteTodo(){
      var todoObj = this.todo;
      this.$store.commit('deleteTodo', todoObj)
    },
    toggleTodo(){
      var todoObj = this.todo;
      this.$store.commit('toggleTodo', todoObj)
    }
  }
}
</script>

<style>

.todo {
  margin: 10px;
  list-style-type: none;
  text-align: left;
}
.todo-done{
  color: gray;
  text-decoration: line-through;
}

.btn-pull-right{
  float: right !important;
}
</style>
