import Api from '@/services/Api'

export default {
  interns () {
    return Api().get('interns')
  },
  createIntern (intern) {
    return Api().post('interns/create', intern)
  }
}
