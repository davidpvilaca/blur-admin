"use strict"
const express = require('express')
const router = express.Router()
const conf = require('../config/conf_app')
const path = require('path')
const controller = require('../controllers/index')

/* GET home page. */
router.get('/', controller.index)
/* GET teste json */
router.get('/teste', controller.teste)

module.exports = router
