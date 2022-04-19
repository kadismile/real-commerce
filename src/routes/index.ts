import  express from 'express'
const router = express.Router()

router.get('/', function(req, res, next) {
  res.sendStatus(200)
})
router.get('/api/ping', function(req, res, next) {
  res.sendStatus(200)
})

module.exports = router




