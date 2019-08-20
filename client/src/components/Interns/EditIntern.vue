<template>
  <!-- <div class="body__container">
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
            <ul>
            <li class="error" v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
    </div>
     <div class="auth__button">
        <button class="auth__btn style__btn" @click="checkAndCreate">SAVE</button>
      </div>
  </div> -->
  <div class="body__container">
    <h3 class="table__title">Editing {{intern.name}}</h3>
    <div class="auth__box__container">
      <div class="auth__label">
        <label for="name">Intern name</label>
        <input
          type="text"
          name="name"
          v-model="intern.name"/>
      </div>
      <div class="auth__label">
        <label for="email">Intern email</label>
        <input
          type="email"
          name="email"
          v-model="intern.email"/>
      </div>
      <p v-if="errors.length">
            <ul>
            <li class="error" v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
      <div class="auth__button">
        <router-link class="back__btn style__btn" :to="{ path:'./', params: internId}">BACK</router-link>
        <button class="auth__btn style__btn" @click="checkAndCreate">SAVE</button>
      </div>
    </div>
  </div>
</template>
<script>
import InternsService from '@/services/InternsService'
export default {
  name: 'edit-intern',
  data () {
    return {
      errors: [],
      internId: this.$store.state.route.params.internId,
      intern: {
        name: null,
        email: null
      }
    }
  },
  async mounted () {
    this.intern = (await InternsService.showIntern(this.internId)).data
  },
  methods: {
    checkAndCreate: function (e) {
      this.errors = []
      if (!this.intern.name) {
        this.errors.push('Name required.')
      }
      if (!this.intern.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.intern.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.errors.length) {
        this.editIntern()
      }
      e.preventDefault()
    },
    validEmail: function (email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    async editIntern () {
      try {
        await InternsService.editIntern(this.intern)
        this.$router.push({
          name: 'intern',
          params: {
            internId: this.internId
          }
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
