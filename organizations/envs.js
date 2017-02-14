const env = process.env.NODE_ENV
const production = 'prod'
const development = 'dev'

function isProduction() {
  return env === production
}

exports.default = {
  env,
  production,
  development
}

exports.isProduction = isProduction
