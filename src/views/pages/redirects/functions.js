'use strict'

function get (req, res, next) {
  if (process.env.NODE_ENV !== 'production') {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0')
  }
  const posts = new Set([
    '/accessibility-is-not-an-edge-case',
    '/bug-fixes-and-performance-improvements',
    '/death-of-the-notes-box',
    '/design-is-not-art',
    '/designing-the-impossible-makes-it-possible',
    '/error-messages-are-not-funny',
    '/hear-no-see-no-techno',
    '/how-to-calculate-reading-time-like-medium',
    '/ive-stopped-calling-myself-vegan',
    '/mental-health-and-flexible-working-hours',
    '/one-page-applications-are-not-accessible',
    '/own-your-alpha',
    '/semantics-and-accessibility',
    '/some-thoughts-on-primary-buttons',
    '/validation-for-prototypes',
    '/what-can-baloo-teach-us-about-design',
    '/what-is-it-like-to-use-a-screen-reader',
    '/what-is-normal-anyway'
  ])
  if (posts.has(req.url)) {
    res.set('location', `/blog${req.url}`)
    return res.status(301).send()
  }
  next()
}

module.exports = { get }
