'use strict';

const express = require('express');

const router = new express.Router();
const {get} = require('./functions');

router.get('/:slug', get);

module.exports = router;
