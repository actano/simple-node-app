const tracer = require('dd-trace')

tracer.init()
console.log('datadog tracer running')

export default tracer
