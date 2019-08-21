export default {
  methods: {
    dispatch (response) {
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      this.$router.push({
        name: 'index'
      })
    }
  }
}
