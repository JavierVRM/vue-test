<template>
  <div class="body__container">
    <div class="welcome" v-if='!$store.state.isUserLoggedIn'>
      <h3>Welcome to </h3>
      <h1>VUE TEST APP</h1>
      <h5>The place where team leaders can manage their interns data</h5>
    </div>
    <div class="welcome" v-if='$store.state.isUserLoggedIn'>
      <h3>Nice to see you again</h3>
      <h1>{{userName}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    const userEmail = this.$store.state.user.email
    const arrobaPosition = userEmail.indexOf('@')
    const userName = userEmail.slice(0, arrobaPosition).toUpperCase()
    return {
      userName
    }
  }
}
</script>
<style scoped>
h1 {
  margin-top: 20px;
  font-size: 70px;
  color: #F3E367;
}
h5 {
  margin-top: 40px;
}
.body__container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
