'use strict'

const express = require('express')

const router = new express.Router()
const { get } = require('./functions')

router.get('/:url', get)

module.exports = router
