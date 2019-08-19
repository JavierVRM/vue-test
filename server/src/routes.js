const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const WorkersController = require('./controllers/WorkersController')
const InternsController = require('./controllers/InternsController')

module.exports = (app) => {
    app.get('/workers', 
        WorkersController.workers
    )
    app.get('/interns', 
        InternsController.interns
    )
    app.get('/interns/:internId',
        InternsController.showIntern
    )
    app.delete('/interns/:internId',
        InternsController.deleteIntern
    )
    app.post('/interns/create', 
        InternsController.createIntern
    )
    app.put('/interns/:internId',
        InternsController.editIntern
    )
    //AUTH
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
