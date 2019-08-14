const {Worker} = require('../models')
const axios = require('axios');

module.exports = {
  async workers (req, res) {
    try {
      const workers = await axios.get('https://my-user-manager.herokuapp.com/users')
      res.send(workers.data)
    } catch (err) {
      console.log(err)
    }
  },
  async createIntern (req, res) {
    try {
      const intern = await Intern.create(req.body)
      res.send(intern)
    } catch (err) {
      console.log(err)
    }
  }
}
