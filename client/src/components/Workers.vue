<template>
  <div class="body__container">
    <div class="waiting__response__icon" v-if="!workers.length">
        <font-awesome-icon icon="spinner" style="color: #dfdede"/>
    </div>
    <div v-if="workers.length" class="flex__table__container">
      <div class="table__title">
        <h4>These are all the workers in the company:</h4>
      </div>
      <div class="flex__table__header">
        <div class="header__item item__container">
          <div class="item item__name item__header">
            <h6>WORKERS</h6>
            <div v-on:click="resortData('name')">
              <font-awesome-icon class="sort__icon" icon="sort-down" v-show="sortBy == 'name' && sortDirection == 'ASC'"/>
              <font-awesome-icon class="sort__icon" icon="sort-up"  v-show="sortBy == 'name' && sortDirection == 'DESC'"/>
            </div>
          </div>
          <div class="item item__email item__header">
            <h6>EMAIL</h6>
          </div>
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
import sortMixin from '../mixins/sortMixin'

export default {
  name: 'Workers',
  data () {
    return {
      workers: null,
      sortBy: 'name',
      sortDirection: 'ASC',
      search: ''
    }
  },
  async mounted () {
    this.workers = (await WorkersService.workers()).data
    this.sortByName()
  },
  mixins: [sortMixin]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.waiting__response__icon {
  font-size: 40px;
}
</style>
