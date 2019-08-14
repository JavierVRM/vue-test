<template>
  <div class="hello">
    <div v-for="worker in workers" :key="worker.name">
      {{worker.name}}
      {{worker.email}}
    </div>
  </div>
</template>

<script>
import WorkersService from '@/services/WorkersService'
export default {
  name: 'Index',
  data () {
    return {
      workers: null
    }
  },
  async mounted () {
    this.workers = (await WorkersService.workers()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
