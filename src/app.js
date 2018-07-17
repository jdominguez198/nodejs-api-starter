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

app.locale = require(global.config.path.locales + "locale");
app.use("/v1/", app.locale.setLanguage);

// Documentation routes
app.use("/doc", express.static(global.config.path.docs));

// Public routes
app.use("/", express.static(global.config.path.static));

// App routes
app.use('/', require(global.config.path.routes));

// 404
app.use(require(global.config.path.utils + "404"));

// Response handling
app.use(require(global.config.path.utils + "response"));

// Error handling
app.use(require(global.config.path.utils + "error"));

module.exports = app;