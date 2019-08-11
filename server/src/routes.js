module.exports = (app) => {
    
    app.get('/status', (req,res) => {
        res.send({
            message: 'hello there'
        })
    })    
    app.post('/register', (req,res) => {
        res.send({
            message: `${req.body.email} ${req.body.password}`
        })
    } )
}
