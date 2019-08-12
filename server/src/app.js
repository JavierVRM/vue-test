require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const {sequelize} = require('./models');
const config = require('./config/config')
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require('./routes')(app)

sequelize.sync({force: false})
    .then(() => {
       app.listen(config.port)
       console.log(`Listening at ${config.port}`)
    })
