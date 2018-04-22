const router = require('express').Router()
const articleController = require('../controllers/articleController')

router
  .post('/create', articleController.create)
  .get('/read', articleController.read)
  .put('/:id', articleController.update)
  .post('/delete/:title', articleController.delete)

module.exports = router
