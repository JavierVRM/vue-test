require("dotenv").config();

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

module.exports = app;
