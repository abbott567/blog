'use strict'

const pathToPage = 'src/views/pages/work-overview'
const portfolioTemplate = `${pathToPage}/template-portfolio.njk`

function get (req, res) {
  res.render(portfolioTemplate, { title: 'Work' })
}

module.exports = { get }
