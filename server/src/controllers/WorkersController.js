const axios = require('axios');

module.exports = {
  async workers (req, res) {
    try {
      const workers = await axios.get(process.env.DBURL)
      res.send(workers.data)
    } catch (err) {
      console.log(err)
    }
  }
}
