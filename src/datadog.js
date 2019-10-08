const tracer = require('dd-trace')

tracer.init({
  logInjection: true,
})
console.log('datadog tracer running')

export default tracer
