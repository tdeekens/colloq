const getMetrics = require('metrics-os')

exports.default = (req, reply) => {
  const metrics = getMetrics()

  reply(metrics)
}
