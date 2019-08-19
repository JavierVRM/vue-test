import Api from '@/services/Api'

export default {
  interns () {
    return Api().get('interns')
  },
  deleteIntern (internId) {
    return Api().delete(`interns/${internId}`)
  },
  showIntern (internId) {
    return Api().get(`interns/${internId}`)
  },
  editIntern  (intern) {
    return Api().put(`interns/${intern.id}`, intern)
  },
  createIntern (intern) {
    return Api().post('interns/create', intern)
  }
}
