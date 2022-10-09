'use strict'

const fs = require('fs-jetpack')

const portfolioTemplate = 'pages/work/template-portfolio.njk'
const workTemplate = 'pages/work/template-piece-of-work.njk'

function getPortfolio (req, res) {
  res.render(portfolioTemplate, { title: 'Work' })
}

function getPieceOfWork (req, res) {
  const workURL = req.params.workURL
  const workExists = fs.exists(`src/pages/work/portfolio/${workURL}/post.md`) === 'file'
  if (workExists) {
    const config = require(`./portfolio/${workURL}/config`)
    req.config = config
    return res.render(workTemplate, { title: 'Portfolio', config })
  } else {
    return res.redirect('/work')
  }
}

module.exports = { getPortfolio, getPieceOfWork }
