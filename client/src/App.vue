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
  b-dropdown-item:focus {
    background-color: inherit !important;
  }
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 0 !important;
  }
  ul {
    list-style: none;
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
    background: linear-gradient(0deg, rgb(48, 48, 51) 0%, rgb(82, 82, 85) 100%);
    width: 100vw;
    min-height: 100vh;
  }
 .error {
    color:rgb(231, 231, 231);
    background: rgba(218, 17, 17, 0.5);
    margin-bottom: 20px;
  }
  .body__container {
    margin-top: 50px;
  }
  .global__padding  {
    padding-left: 100px;
    padding-right: 100px;
  }
/* GENERAL BUTTONS */
 button {
    background-color: transparent !important;
    border: none !important;
  }
  button:focus {
    outline:none;
  }
 .style__btn {
    padding: 2px 10px;
    border-radius: 2px;
    border: 1px solid rgba(0,0,0,0.1);
  }
  .style__btn:hover {
    opacity: 0.9;
  }
  .auth__btn {
    background-color: #F3E367!important;
    color: rgb(44, 44, 44);
  }
  .create__btn__container {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  .create__btn {
    background-color: rgb(105, 167, 105)!important;
    color: rgb(233, 233, 233) !important;
  }
  .back__btn {
    background-color: rgba(255,255,255,0.1);
  }
/* GENERAL AUTH*/
.auth__box__container {
  width: 50%;
  margin: 0 auto;
}
/* GENERAL INPUTS */
  label {
    width: 100%;
    text-align: left;
  }
  input {
    width: 100%;
    margin-bottom: 20px;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    color: whitesmoke;
  }
  input:focus {
    outline:none;
  }
/* GENERAL FLEX TABLES */
.table__title {
  margin-bottom: 40px !important;
  width: 100%;
}
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
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
.body__item:nth-child(even) {
  background: rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.item {
  width: 50%;
}
.item__container {
  padding: 5px 20px;
}
.item__header {
  display: flex;
  align-items: center;
}
.sort__icon {
    margin-left: 5px;
  }
/* GLOBAL QUERIES */
@media (max-width: 767px) {
  .global__padding {
    padding-left: 20px;
    padding-right: 20px;
  }
  .flex__table__container {
    width: 100%;
  }
  .auth__box__container {
    width: 100%;
  }
  .body__item {
    flex-wrap: wrap;
  }
  .item {
    width: 100%;
  }
  .item__email.item__header {
    display: none;
  }
}
</style>
