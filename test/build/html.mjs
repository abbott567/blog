import html from '../../src/build/all.mjs'
import fs from 'fs-jetpack'

import { expect } from 'chai'

export default {
  should: {
    save: () => {
      const filepath = 'test/assets/dist/save-test.html'
      const code = '<h1>This should save</h1>'
      html.save(filepath, code)
      const results = fs.read(filepath)
      expect(results).to.eql(code)
    },
    be: {
      minified: () => {
        const code = `
          <h1>
            Test minification
          </h1>
  
          <p>
            This HTML is not minified.
          </p>
        `
        const result = html.minify(code)
        const noOfLines = result.split(/\r\n|\r|\n/).length
        expect(noOfLines).to.eql(1)
      }
    }
  },
  loads: {
    correct: {
      posts: {
        in: {
          test: () => {
            html.build()
            const postResults = fs.list('test/assets/dist/posts')
            expect(postResults).to.include('post-is-valid.html')
          },
          dev: () => {
            html.build()
            const postResults = fs.list('dist/posts')
            expect(postResults).to.include('what-is-normal-anyway.html')
          }
        }
      },
      pages: {
        in: {
          test: () => {
            html.build()
            const pageResults = fs.list('test/assets/dist/pages')
            expect(pageResults).to.include('page-is-valid.html')
            expect(pageResults).to.include('blog-1.html')
          },
          dev: () => {
            html.build()
            const pageResults = fs.list('dist/pages')
            expect(pageResults).to.include('home.html')
            expect(pageResults).to.include('blog-1.html')
          }
        }
      },
      projects: {
        in: {
          test: () => {
            html.build()
            const projectResults = fs.list('test/assets/dist/projects')
            expect(projectResults).to.include('project-is-valid.html')
          },
          dev: () => {
            html.build()
            const projectResults = fs.list('dist/projects')
            expect(projectResults).to.include('accessibility-clinics.html')
          }
        }
      }
    }
  }
}
