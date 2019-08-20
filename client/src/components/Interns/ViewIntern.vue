
<template>
  <div class="body__container" v-if="intern">
    <div class="flex__table__container">
      <div class="table__title">
        <h4>Seeing: {{intern.name}}</h4>
      </div>
      <div class="header__item item__container">
        <div class="view__item">Name</div>
        <div class="view__item">Email</div>
        <div class="view__item">Since</div>
        <div class="view__item__actions">
          Actions
        </div>
      </div>
      <div class="body__item item__container">
        <div class="view__item">
          {{intern.name}}
        </div>
        <div class="view__item">
           {{intern.email}}
        </div>
        <div class="view__item">
          {{since}}
        </div>
        <div class="view__item__actions">
          <router-link v-b-tooltip.hover title="Edit" :to="{name: 'edit-intern', params: {internId: intern.id}}">
            <font-awesome-icon icon="edit"/>
          </router-link>
          <button v-b-tooltip.hover title="Delete" v-on:click="deleteIntern(intern.id)">
            <font-awesome-icon icon="trash-alt" style="color: #dfdede"/>
          </button>
        </div>
      </div>
      <div class="auth__button">
        <router-link class="back__btn style__btn" to="../../interns">BACK</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import InternsService from '@/services/InternsService'
export default {
  name: 'intern',
  data () {
    return {
      internId: this.$store.state.route.params.internId,
      intern: null,
      since: null
    }
  },
  async mounted () {
    this.intern = (await InternsService.showIntern(this.internId)).data
    const memberSinceRaw = this.intern.createdAt
    const tPosition = memberSinceRaw.indexOf('T')
    const memberSince = memberSinceRaw.slice(0, tPosition)
    this.since = memberSince
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
.view__item {
  width: 30%;
}
.view__item__actions {
  width: 10%;
}
.auth__button {
  width: 100%;
  text-align: center;
  margin-top: 20px;
}
button {
  margin-left: 20px;
}
</style>
