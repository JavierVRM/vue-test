<template>
    <div class="navbar__container global__padding">
      <div class="navbar__brand">
        <router-link to="/">
           <div class="navbar__logo">
             <img src="@/assets/images/logo.png" alt="">
             <h5 id="logo__text">VUE TEST</h5>
           </div>
        </router-link>
      </div>
      <div v-if='!$store.state.isUserLoggedIn' class="navbar__auth__buttons margin__rigth">
        <router-link  to="login">
          <h6>SIGN IN</h6>
        </router-link>
        <router-link  to="register" id="register">
          <h6>SIGN UP</h6>
        </router-link>
      </div>
      <div>
        <b-dropdown v-if='$store.state.isUserLoggedIn' id="dropdown-1" :text="userName" class="m-md-2">
            <b-dropdown-item class="dropdown__item">
              <router-link  to="/workers">
                <h6>Workers</h6>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item class="dropdown__item">
              <router-link  to="/interns">
                <h6>Interns</h6>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-divider class="dropdown__item"></b-dropdown-divider>
            <b-dropdown-item class="dropdown__item">
              <router-link  v-on:click.native="logout" to="/">
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
  computed: {
    getFullPath () {
      return this.$route.path
    }
  },
  watch: {
    getFullPath () {
      this.getData()
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    },
    getData () {
      if (this.$store.state.user) {
        const userEmail = this.$store.state.user.email
        const arrobaPosition = userEmail.indexOf('@')
        const userName = userEmail.slice(0, arrobaPosition).toUpperCase()
        this.userName = userName
      }
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
    align-items: center;
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
  .navbar__logo {
    display: flex;
    align-items: center;
    height: 100%;
  }
  #register {
    margin-left: 20px;
  }
  h6 {
    font-size: 14px;
  }
  img {
    width: 15px;
    margin-right: 15px;
  }
  @media (max-width: 767px) {
    #logo__text {
      display: none;
    }
    .dropdown-menu {
      left: -90px !important;
    }
    ul {
      left: -90px !important;
    }
  }
</style>
