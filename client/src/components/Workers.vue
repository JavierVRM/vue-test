<template>
  <div class="body__container">
    <div class="flex__table__container">
      <div class="flex__table__header">
        <div class="header__item item__container">
          <div class="item item__name item__header"><h6>WORKER</h6></div>
          <div class="item item__email item__header"><h6>EMAIL</h6></div>
        </div>
      </div>
      <div class="flex__table__body" >
        <div class="body__item item__container" v-for="worker in workers" :key="worker.name">
          <div class="item item__name item__body">{{worker.name}}</div>
          <div class="item item__email item__body"> {{worker.email}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WorkersService from '@/services/WorkersService'
export default {
  name: 'Workers',
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
</style>
