
<template>
  <div class="body__container">
    <div class="flex__table__container">
      <div v-if="interns.length" class="table__title">
        <h4>These are all the interns in the company:</h4>
      </div>
      <div v-if="!interns.length" class="table__title">
        <h4>Add some interns!</h4>
      </div>
      <div class="flex__table__header">
        <div class="header__item item__container">
          <div class="item item__name item__header">
            <h6>INTERNS</h6>
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
        <div class="body__item item__container" v-for="intern in interns" :key="intern.name">
          <div class="item item__name item__body">{{intern.name}}</div>
          <div class="item item__email item__body"> {{intern.email}}</div>
          <router-link :to="{name: 'intern', params: {internId: intern.id}}">
            <font-awesome-icon class="watch__icon" icon="eye"/>
          </router-link>
        </div>
      </div>
      <div class="create__btn__container">
        <router-link class="create__btn style__btn" to="/interns/create">ADD A INTERN</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import InternsService from '@/services/InternsService'
import sortMixin from '../../mixins/sortMixin'

export default {
  name: 'Interns',
  data () {
    return {
      interns: null,
      sortBy: 'name',
      sortDirection: 'ASC',
      search: '',
      id: ''
    }
  },
  async mounted () {
    this.interns = (await InternsService.interns()).data
    this.sortByName()
  },
  mixins: [sortMixin]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
