<template>
<div class='todo'>
  <ul>
  <li>
    <span>{{todo.task}}</span>
    <button type="button" class="btn btn-danger" @click="deleteTodo">Delete</button>
  </li>
</ul>
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'todo',
  props: ['todo'],
  data() {
    return {

    }
  },
  methods: {
    deleteTodo(){
      var todoObj = this.todo;
      this.$store.commit('deleteTodo', todoObj)
    }
  },

}
</script>

<style>

</style>
