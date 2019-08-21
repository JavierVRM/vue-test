<template>
  <div class="body__container">
    <h3 class="table__title">Sign up</h3>
    <div class="auth__box__container">
      <div class="auth__label">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          v-model="email"/>
      </div>
      <div class="auth__label">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          v-model="password"/>
      </div>
      <div class="error" v-html="error"></div>
      <div class="auth__button">
        <button class="auth__btn style__btn" @click="register">Register</button>
      </div>
    </div>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
import dispatchAndRedirect from '../mixins/dispatchAndRedirect.js'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.dispatch(response)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  mixins: [dispatchAndRedirect]
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
