const Joi = require('@hapi/joi')

module.exports = {
    register (req, res, next) {
      const schema = {
        email: Joi.string().email(),
        password: Joi.string()
      }
  
      const {error} = Joi.validate(req.body, schema)
  
      if (error) {
        switch (error.details[0].context.key) {
          case 'email':
            res.status(400).send({
              error: 'You must provide a valid email address'
            })
            break
          case 'password':
            res.status(400).send({
              error: 'The password must be 4 to 10 characters long. Numbers and letters only.'
            })
            break
          default:
            res.status(400).send({
              error: 'Something went wrong'
            })
        }
      } else {
        next()
      }
    }
  }
