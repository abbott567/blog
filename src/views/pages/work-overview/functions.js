'use strict'

const pathToPage = 'src/views/pages/work-overview'
const portfolioTemplate = `${pathToPage}/template.njk`

function get (req, res) {
  const portfolio = require('../work-deep-dive/portfolio/_config')
  res.render(portfolioTemplate, { title: 'Work', portfolio })
}

module.exports = { get }
