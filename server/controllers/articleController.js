const Article = require('../models/article')

module.exports = {
  create: (req,res)=>{
    const newArticle = new Article(req.body)
    newArticle.save()
      .then(article=>{
        res.status(201).json({
          message: 'new article created',
          data: article
        })
      })
      .catch(err=>{
        res.status(500).json({
          message: 'article not created'
        })
      })
  },
  read: (req,res)=>{
    Article.find()
      .then(articles=>{
        res.status(200).json({
          message: `all article data`,
          data: articles
        })
      })
      .catch(err=>{
        res.status(404).json({
          message: 'article not found'
        })
      })
  },
  delete: (req,res)=>{
    Article.find({
      title: req.params.title
    })
      .then(article=>{
        Article.findByIdAndRemove({
          _id: article[0]._id
        })
          .then(article=>{
            res.status(200).json({
              message: 'article deleted',
              data: article
            })
          })
          .catch(err=>{
            res.status(500).json({
              message: 'article not deleted'
            })
          })
      })
      .catch(err=>{
        res.status(500).json({
          message: 'article not deleted'
        })
      })
  }
}
