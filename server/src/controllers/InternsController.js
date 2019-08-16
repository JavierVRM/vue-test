const {Intern} = require('../models')
const axios = require('axios');

module.exports = {
  async interns (req,res) {
    try {
      const interns = await Intern.findAll()
      res.send(interns)   
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
