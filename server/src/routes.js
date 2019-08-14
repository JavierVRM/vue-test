const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
    app.get('/check', (req,res) => {
        res.send({
            message: 'Hello'
        })
    })
    // Registration 
    app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
    )
    // Log-In
    app.post('/login',
    AuthenticationController.login
    )
}
