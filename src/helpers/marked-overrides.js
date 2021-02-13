const overrides = {
  marked: {
    code: function (renderer) {
      renderer.code = function (code, infostring, escaped) {
        const lang = (infostring || '').match(/\S*/)[0]
        if (this.options.highlight) {
          const out = this.options.highlight(code, lang)
          if (out != null && out !== code) {
            escaped = true
            code = out
          }
        }
        code = code.replace(/~~/g, '')
        if (!lang) {
          return `<pre tabindex="0"><code>${(escaped ? code : escape(code, true))}</code></pre>\n`
        }

        return `<pre tabindex="0"><code class="${this.options.langPrefix}${escape(lang, true)}">${(escaped ? code : escape(code, true))}</code></pre>\n`
      }
    },
    heading: function (renderer) {
      renderer.heading = function (text, level) {
        const pageHeading = text.replace(/\{(.*?)\}/, '').trim()
        const id = pageHeading.toLowerCase().replace(/([~!@#$%^&*()_+=`{}[\]|\\:;'<>,./? ])+/g, '-')
        let headingClass = ''

        if (level === 1) {
          headingClass = 'heading-xlarge'
        } else if (level === 2) {
          headingClass = 'heading-large'
        } else if (level === 3) {
          headingClass = 'heading-medium'
        } else {
          headingClass = 'heading-small'
        }

        return `
          <h${level} id="${id}" class="${headingClass}">
            ${text}
          </h${level}>
        `
      }
    }
  }
}

module.exports = { overrides }
