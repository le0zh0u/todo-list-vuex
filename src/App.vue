<template>
<div id="app">
  <section>
    <h1>TODO LIST</h1>
  </section>
  <section :class="['marginLR20per']">
    <div :class="['paddingLR20per']">
      <input v-model="newItem.task" @keyup.enter="addItem">
    </div>
    <ul :class="['paddingLR20per']">
      <todo v-for="todo in todos" :todo="todo"></todo>
    </ul>

  </section>
</div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
import Todo from './components/Todo'

export default {
  name: 'app',
  data() {
    return {
      newItem: {
        task: '',
        done: false
      }
    }
  },
  components: {
    Todo
  },
  methods: {
    addItem() {
      // console.log('add new item, task value is ' + this.newItem.task);
      var task = this.newItem.task;
      if (task.trim()) {
        this.$store.commit('addTodo', {
          task
        })
      }
      this.newItem.task = '';
    }
  },
  computed: {
    todos() {
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

.paddingLR20per {
  line-height: inherit;
  padding-left: 20%;
  padding-right: 20%;
}

.marginLR20per{
  margin-left: 20%;
  margin-right: 20%;
}

input {
  width: 100%;
}
</style>
