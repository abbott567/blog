import buildEnv from './nunjucks.mjs'
import save from './html.save.mjs'
import minify from './html.minify.mjs'
import wcagifyLinks from './wcagify.mjs'

function buildProject (site, project) {
  const filepath = process.env.NODE_ENV === 'test' ? `test/assets/dist/projects/${project.slug}.html` : `dist/projects/${project.slug}.html`
  const njk = buildEnv()
  const html = njk.render('layouts/project.njk', { site, project })
  const wcagified = wcagifyLinks(html)
  const minified = minify(wcagified)
  save(filepath, minified)
}

function buildProjects (site) {
  console.log('Building Projects'.yellow)
  site.projects.forEach(project => {
    buildProject(site, project)
  })
  console.log('Projects built'.green)
}

export default buildProjects
