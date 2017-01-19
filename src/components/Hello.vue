<template>
<div class="hello">
  <alert :show.sync="showRight" placement="top-right" :duration="duration" type="success" dismissable>
    <span class="icon-ok-circled alert-icon-float-left"></span>
    <strong>Well Done!</strong>
    <p>{{msg}}</p>
  </alert>
</div>
</template>

<script>
import { alert } from 'vue-strap'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      showRight: true,
      duration: 3000
    }
  },
  components: {
    alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
