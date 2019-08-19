
<template>
  <div v-if="intern">
    <h1>hello there</h1>
    <div>
      {{intern.name}}
      {{intern.email}}
    </div>
    <router-link :to="{name: 'edit-intern', params: {internId: intern.id}}">{{intern.id}}</router-link>
    <button v-on:click="deleteIntern(intern.id)">X</button>
  </div>
</template>

<script>
import InternsService from '@/services/InternsService'
export default {
  name: 'intern',
  data () {
    return {
      internId: this.$store.state.route.params.internId,
      intern: null
    }
  },
  async mounted () {
    this.intern = (await InternsService.showIntern(this.internId)).data
  },
  methods: {
    deleteIntern: async function (internId) {
      try {
        await InternsService.deleteIntern(this.internId)
        this.$router.push('/interns')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
