import forcehttps from './force.mjs'

function useHttpsInProd (app) {
  if (process.env.NODE_ENV === 'production') {
    // needed for secure cookies on heroku
    app.set('trust proxy', 1)
    // Force http to redirect to https
    app.use(forcehttps)
  }
}

export default useHttpsInProd
