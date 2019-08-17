
<template>
  <div class="body__container">
    <div class="flex__table__container">
      <div class="flex__table__header">
        <div class="header__item item__container">
          <div class="item item__name item__header">
            <h6>INTERNS</h6>
          </div>
          <div class="item item__email item__header">
            <h6>EMAIL</h6>
          </div>
        </div>
      </div>
      <div class="flex__table__body" >
        <div class="body__item item__container">
          <input class="item item__name item__body" v-model="intern.name" type="text" name="name">
          <input class="item item__email item__body" v-model="intern.email" type="email" name="email">
        </div>
      </div>
       <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
    </div>
     <div class="auth__button">
        <button class="auth__btn" @click="checkAndCreate">ADD</button>
      </div>
  </div>
</template>
<script>
import InternsService from '@/services/InternsService'
export default {
  data () {
    return {
      errors: [],
      intern: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    checkAndCreate: function (e) {
      this.errors = []
      if (!this.intern.name) {
        console.log(this.intern.name)
        this.errors.push('Name required.')
      }
      if (!this.intern.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.intern.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.errors.length) {
        this.create()
      }
      e.preventDefault()
    },
    validEmail: function (email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    async create () {
      try {
        await InternsService.createIntern(this.intern)
        this.$router.push({
          name: 'interns'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>
</style>
