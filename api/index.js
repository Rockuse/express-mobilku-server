const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(express.static('Images'));
app.use(cors());
app.use(helmet());
require('./routes')(app, express);

module.exports = app;
