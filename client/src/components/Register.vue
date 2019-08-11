<template>
  <div>
    <h1>Register Component</h1>
    <div class="auth__box__container">
      <div class="auth__label">
        <label for="email"></label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          v-model="email"/>
      </div>
      <div class="auth__label">
        <label for="password"></label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          v-model="password"/>
      </div>
      <div class="auth__button">
        <button @click="register">Register</button>
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
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
