
<template>
  <div class="body__container">
    <div class="flex__table__container">
      <div class="flex__table__header">
        <div class="header__item item__container">
          <div class="item item__name item__header">
            <h6>INTERNS</h6>
            <div v-on:click="resortData('name')">
              <span v-show="sortBy == 'name' && sortDirection == 'ASC'">v</span>
              <span v-show="sortBy == 'name' && sortDirection == 'DESC'">^</span>
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
          <router-link :to="{name: 'intern', params: {internId: intern.id}}">{{intern.id}}</router-link>
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
  methods: {
    resortData (by) {
      if (by === this.sortBy) {
        if (this.sortDirection === 'ASC') {
          this.sortDirection = 'DESC'
        } else {
          this.sortDirection = 'ASC'
        }
      }
      if (by !== this.sortBy) {
        this.sortDirection = 'ASC'
        this.sortBy = by
      }
      this.sortByName()
    },
    sortByName () {
      this.interns.sort(function (a, b) {
        if (this.sortDirection === 'ASC') {
          return ((a.name === b.name) ? 0 : ((a.name > b.name) ? 1 : -1))
        }

        if (this.sortDirection === 'DESC') {
          return ((a.name === b.name) ? 0 : ((a.name < b.name) ? 1 : -1))
        }
      }.bind(this))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
