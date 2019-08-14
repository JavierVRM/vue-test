import Api from '@/services/Api'

export default {
  workers () {
    return Api().get('/')
  }
}
