export default {
  methods: {
    checkErrors: function () {
      this.errors = []
      if (!this.intern.name) {
        this.errors.push('Name required.')
      }
      if (!this.intern.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.intern.email)) {
        this.errors.push('Valid email required.')
      }
    },
    validEmail: function (email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    checkAndCreate: function (e) {
      this.checkErrors()
      if (!this.errors.length) {
        this.create()
      }
      e.preventDefault()
    },
    checkAndEdit: function (e) {
      this.checkErrors()
      if (!this.errors.length) {
        this.editIntern()
      }
      e.preventDefault()
    }
  }
}
