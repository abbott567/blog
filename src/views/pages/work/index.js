'use strict'

const express = require('express')

const router = new express.Router()
const { getPortfolio, getPieceOfWork } = require('./functions')

router.get('/', getPortfolio)
router.get('/:workURL', getPieceOfWork)

module.exports = router
