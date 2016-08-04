"use strict"
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const app = express()
const conf = require('./config/conf_app')

// View engine setup
app.set('views', path.join(__dirname, conf.viewPath))
app.set('view engine', conf.viewEngine)
// Others setup
// app.use(favicon(path.join(__dirname, conf.publicPath, 'assets/img/favicon-16x16.png')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

// Static paths
app.use(express.static(path.join(__dirname, conf.publicPath)))
app.use('/bower_components', express.static(path.join(__dirname, conf.vendorPath)))

// Routes
app.use('/', routes)

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

/// error handlers

// development error handler
// will print stacktrace
if (conf.isDev) {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500)
        res.render('error', {
            message: err.message,
            error: err,
        })
    })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
        message: err.message,
        error: {},
    })
})

module.exports = app