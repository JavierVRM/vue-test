import Api from '@/services/Api'

export default {
  interns () {
    return Api().get('interns')
  },
  createIntern () {
    return Api().post('interns')
  }
}
