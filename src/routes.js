import { Router } from 'express'

export const router = new Router()

router.get('/', function (req, res) {
  res.send('Server is running. Please request some interesting route')
})
// define the home page route
router.get('/health', function (req, res) {
  res.status(200).send('OK')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

