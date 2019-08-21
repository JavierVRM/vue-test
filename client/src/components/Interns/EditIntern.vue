<template>
  <div class="body__container">
    <h3 class="table__title">Editing {{intern.name}}</h3>
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
        <router-link class="back__btn style__btn" :to="{ path:'./', params: internId}">BACK</router-link>
        <button class="auth__btn style__btn" @click="checkAndEdit">SAVE</button>
      </div>
    </div>
  </div>
</template>
<script>
import InternsService from '@/services/InternsService'
import checkMixin from '../../mixins/checkMixin'

export default {
  name: 'edit-intern',
  data () {
    return {
      errors: [],
      internId: this.$store.state.route.params.internId,
      intern: {
        name: null,
        email: null
      }
    }
  },
  async mounted () {
    this.intern = (await InternsService.showIntern(this.internId)).data
  },
  methods: {
    async editIntern () {
      try {
        await InternsService.editIntern(this.intern)
        this.$router.push({
          name: 'intern',
          params: {
            internId: this.internId
          }
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
