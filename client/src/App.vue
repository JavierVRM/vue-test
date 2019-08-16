<template>
  <div id="app">
    <nav-bar/>
    <router-view class="global__padding"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
/* GENERAL APP*/
  * {
    margin: 0;
    padding: 0;
  }
  a {
    color: inherit !important;
    text-decoration: none !important;
  }
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 0 !important;
  }
  button {
    background-color: transparent !important;
    border: none !important;
  }
  router-view {
    margin-top: 50px;
    padding-top: 50px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #dfdede;
    background: rgb(146,157,158);
    background: linear-gradient(0deg, rgba(146,157,158,1) 0%, rgba(127,134,136,1) 100%);
    width: 100vw;
    height: 100vh;
  }
 .error {
    color:rgb(173, 36, 36);
    margin-bottom: 20px;
    padding: 5px 0px;
    text-decoration: underline;
  }
  .body__container {
    margin-top: 50px;
  }
  .global__padding  {
    padding-left: 100px;
    padding-right: 100px;
  }
/* GENERAL NAVBAR */
  label {
    width: 50%;
    text-align: left;
  }
  input {
    width: 50%;
    margin-bottom: 20px;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    color: whitesmoke;
  }
  input:focus {
    outline:none;
  }
  .auth__btn {
    background-color: #F3E367!important;
    padding: 2px 10px;
    border-radius: 2px;
    color: rgb(102, 100, 100);
  }
/* GENERAL FLEX TABLES */
.flex__table__container {
  margin: 0 auto;
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  text-align: left;
}
.flex__table__header {
  width: 100%;
  display: flex;
}
.header__item {
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.1);
  padding-top: 7px;
}
.flex__table__body {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.body__item {
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,0.2);
}
.body__item:nth-child(even) {
  background: rgba(255,255,255,0.1);
}
.item {
  width: 50%;
}
.item__name {
  margin-left: 20px;
}
.item__container {
  padding-bottom: 5px;
  padding-top: 5px;
}
.item__header {
  display: flex;
  align-items: center;
}
</style>
