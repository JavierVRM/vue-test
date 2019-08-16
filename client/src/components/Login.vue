<template>
  <div class="body__container">
    <h1>Login Component</h1>
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
        <button class="auth__btn" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'index'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
