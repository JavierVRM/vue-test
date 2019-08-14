const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const WorkersController = require('./controllers/WorkersController')

module.exports = (app) => {
    app.get('/', 
        WorkersController.workers
    )
    app.post('/', 
        WorkersController.createIntern
    )
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
