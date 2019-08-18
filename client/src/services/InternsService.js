import Api from '@/services/Api'

export default {
  interns () {
    return Api().get('interns')
  },
  deleteIntern (idIntern) {
    return Api().delete(`interns/${idIntern}`)
  },
  showIntern (internId) {
    return Api().get(`interns/${internId}`)
  },
  createIntern (intern) {
    return Api().post('interns/create', intern)
  }
}
