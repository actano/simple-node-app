import './datadog'
import express from 'express'
import bodyParser from 'body-parser'
import createLogger from '@rplan/logger'
import config from '@rplan/config'
import { router } from './routes.js'

const logger = createLogger('server')

export async function initApp() {
  const app = express()
  app.disable('x-powered-by')

  app.use(bodyParser.json())
  app.use(router)

  return app
}

function shutdownServer(server) {
  logger.info('shutting down server')
  server.close(() => {
    logger.info('server was shut down')
  })
}


async function start() {
  const app = await initApp()

  const port = config.get('server:port')

  const server = app.listen(port, () => {
    logger.info(`simple-node-app listening on port ${port}`)
  })

  process.on('SIGINT', () => {
    shutdownServer(server)
  })

}

if (require.main === module) {
  start()
    .catch((err) => {
      logger.error(err)
      process.exit(1)
    })
}

