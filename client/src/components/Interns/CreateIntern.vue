
<template>
  <div class="body__container">
    <h3 class="table__title">Adding a intern</h3>
    <div class="auth__box__container">
      <div class="auth__label">
        <label for="name">Intern name</label>
        <input
          type="text"
          name="name"
          v-model="intern.name"/>
      </div>
      <div class="auth__label">
        <label for="email">Intern email</label>
        <input
          type="email"
          name="email"
          v-model="intern.email"/>
      </div>
      <p v-if="errors.length">
            <ul>
            <li class="error" v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
      <div class="auth__button">
        <router-link class="back__btn style__btn" to="../interns">BACK</router-link>
        <button class="auth__btn style__btn" @click="checkAndCreate">ADD</button>
      </div>
    </div>
  </div>
</template>
<script>
import InternsService from '@/services/InternsService'
import checkMixin from '../../mixins/checkMixin'

export default {
  data () {
    return {
      errors: [],
      intern: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    async create () {
      try {
        await InternsService.createIntern(this.intern)
        this.$router.push({
          name: 'interns'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  mixins: [checkMixin]
}
</script>
<style scoped>
</style>
