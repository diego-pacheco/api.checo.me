var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var jobs = require('./routes/jobs');
var about = require('./routes/about');
var projects = require('./routes/projects');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/jobs', jobs);
app.use('/api/v1/projects', projects);
app.use('/api/v1/about', about);

module.exports = app;