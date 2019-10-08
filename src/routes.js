import { Router } from 'express'
import axios from 'axios'
import config from '@rplan/config'
import createLogger from '@rplan/logger'

export const router = new Router()
const logger = createLogger('routes')
const externalService = config.get('external_service')

router.get('/', function (req, res) {
  res.send('Server is running. Please request some interesting route')
})

router.get('/health', function (req, res) {
  res.status(200).send('OK')
})

router.get('/delay/:seconds', function (req, res) {
  const waitTime = req.params.seconds * 1000
  setTimeout(() => {
    res.status(200).send(`Waited ${waitTime}ms`)
  }, waitTime)
})

router.post('/request', async function (req, res) {
  if (externalService && externalService !== '') {
    logger.info(`requesting external service ${externalService}`)
    const result = await axios.get(`${externalService}/delay/2`)
    res.send(result.data)
  } else {
    logger.info('no external service specified')
    res.send('no external service specified')
  }
})

