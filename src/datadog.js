const tracer = require('dd-trace')
const StatsD = require('hot-shots');

const dogstatsd = new StatsD();
dogstatsd.increment('container.starts')

tracer.init({
  analytics: true,
})
console.log('datadog tracer running')

export default tracer

