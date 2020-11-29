'use strict'

const express = require('express')

const router = new express.Router()
const { get, checkPageQuery } = require('./functions')

router.use(checkPageQuery)
router.get('/', get)

module.exports = router
