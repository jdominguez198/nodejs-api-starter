'use strict';

global.config = require('./config');

const express = require('express');
const app = express();

// File handling
app.fs = require('fs');

// Log accessing
const morgan = require('morgan');
app.use(morgan('[:date[clf]] :method :url :status :res[content-length] - :response-time ms'));

// CORS
const cors = require('cors');
app.use(cors({
    origin: '*',
    credentials: true
}));

// Helmet
const helmet = require('helmet');
app.use(helmet());

// Mongo
//app.db = require(global.config.path.db);

// Body parsing into text/json
const bodyParser = require('body-parser');
app.use(bodyParser.text());

// Routes
app.use('/', require(global.config.path.routes));

module.exports = app;