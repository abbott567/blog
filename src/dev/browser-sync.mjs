import 'colors'
import browserSync from 'browser-sync'

let instance

function getSyncInstance () {
  if (instance) {
    return instance
  } else {
    instance = browserSync.create()
    instance.emitter.on('init', function () {
      console.log('Browser Sync proxy started on http://localhost:3000'.green)
    })
    instance.emitter.on('browser:reload', function () {
      console.log('Browser Sync proxy re-loaded on http://localhost:3000'.green)
    })
    instance.init({
      ui: false,
      port: 3000,
      proxy: 'localhost:3001',
      ghostMode: false,
      open: false,
      notify: false,
      logLevel: 'error'
    })
  }
}

export default getSyncInstance
