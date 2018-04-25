const router = require('express').Router()
const articleController = require('../controllers/articleController')
const { isUser } = require('../middleware/auth.js')

router
  .post('/create', isUser, articleController.create)
  .get('/read', articleController.read)
  .post('/delete/:title', isUser, articleController.delete)

module.exports = router
