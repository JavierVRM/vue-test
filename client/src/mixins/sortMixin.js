export default {
  methods: {
    resortData (by) {
      if (by === this.sortBy) {
        if (this.sortDirection === 'ASC') {
          this.sortDirection = 'DESC'
        } else {
          this.sortDirection = 'ASC'
        }
      }
      if (by !== this.sortBy) {
        this.sortDirection = 'ASC'
        this.sortBy = by
      }
      this.sortByName()
    },
    sortByName () {
      let query = null
      if (this.workers) {
        query = this.workers
      }
      if (this.interns) {
        query = this.interns
      }
      query.sort(function (a, b) {
        if (this.sortDirection === 'ASC') {
          return ((a.name === b.name) ? 0 : ((a.name > b.name) ? 1 : -1))
        }

        if (this.sortDirection === 'DESC') {
          return ((a.name === b.name) ? 0 : ((a.name < b.name) ? 1 : -1))
        }
      }.bind(this))
    }
  }
}
