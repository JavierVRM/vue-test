<template>
    <div class="navbar__container global__padding">
      <div class="navbar__brand">
        <router-link to="/">
           <h5>VUE TEST</h5>
        </router-link>
      </div>
      <div v-if='!$store.state.isUserLoggedIn' class="navbar__auth__buttons margin__rigth">
        <router-link  to="login">
          <h6>LOGIN</h6>
        </router-link>
        <router-link  to="register" id="register">
          <h6>CREATE ACCOUNT</h6>
        </router-link>
      </div>
      <div>
        <b-dropdown v-if='$store.state.isUserLoggedIn' id="dropdown-1" :text="userName" class="m-md-2">
          <b-dropdown-item>
            <router-link  to="/workers">
              <h6>Leaders</h6>
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link  to="/interns">
              <h6>Interns</h6>
            </router-link>
          </b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item >
            <router-link  v-if='$store.state.isUserLoggedIn' v-on:click.native="logout" to="/">
              <h6>Logout</h6>
            </router-link>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data: function () {
    const userEmail = this.$store.state.user.email
    const arrobaPosition = userEmail.indexOf('@')
    const userName = userEmail.slice(0, arrobaPosition).toUpperCase()
    return {
      userName
    }
  },
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
    justify-content: space-between;
    flex-wrap: nowrap;
    /* background-color: #7F8688 ; */
    color: whitesmoke;
  }
  .navbar__brand {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .navbar__auth__buttons {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #register {
    margin-left: 20px;
  }
  h6 {
    font-size: 14px;
  }
</style>
