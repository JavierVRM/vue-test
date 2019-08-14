<template>
    <div class="navbar__container">
      <div class="navbar__brand">
        <router-link to="/">
           <h5>VUE TEST</h5>
        </router-link>
      </div>
      <div v-if='!$store.state.isUserLoggedIn' class="navbar__auth__buttons">
        <router-link  to="login">
          <h6>LOGIN</h6>
        </router-link>
        <router-link  to="register" id="register">
          <h6>CREATE ACCOUNT</h6>
        </router-link>
      </div>
      <div v-if='$store.state.isUserLoggedIn' class="navbar__auth__buttons">
        <router-link  v-if='$store.state.isUserLoggedIn' v-on:click.native="logout" to="/">
          <h6>LOGOUT</h6>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar__container {
    width: 100%;
    height: 50px;
    display: flex;
    flex-wrap: nowrap;
    background-color: #773344;
    color: whitesmoke;
  }
  .navbar__brand {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    align-items: center;
  }
  .navbar__auth__buttons {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    align-items: center;
  }
  #register {
    margin-left: 20px;
  }
</style>
