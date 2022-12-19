import watch from '../dev/watch.mjs'
import nodemon from '../dev/nodemon.mjs'
import htmlAll from '../build/all.mjs'
import buildDataModel from '../build/data-model.mjs'

async function runDev () {
  const site = buildDataModel()
  await htmlAll.build()
  await watch(site)
  nodemon()
}

runDev()
