<template>
<div class='todo'>
  <ul>
  <li>
    {{todo.task}}
  </li>
</ul>
</div>
</template>

<script>
export default {
  name: 'todo',
  props: ['todo'],
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

</style>
