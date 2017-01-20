<template>
  <div id="app">
    <section>
      <h1>TODO LIST</h1>
    </section>
    <section>
      <input v-model="newItem.task" @keyup.enter="addItem">
      <ul>
        <todo v-for="todo in todos" :todo="todo"></todo>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Todo from './components/Todo'

export default {
  name: 'app',
  data(){
    return {
      newItem: {task: '', done: false}
    }
  },
  components: {
    Todo
  },
  methods: {
    addItem(){
      console.log('add new item, task value is '+ this.newItem.task);
      var task = this.newItem.task;
      if (task.trim()) {
        this.$store.commit('addTodo', { task })
      }
      this.newItem.task = '';
    },
    ...mapMutations([
      'addTodo'
    ])
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
