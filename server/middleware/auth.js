const jwt = require('jsonwebtoken')
const secret = process.env.SECRET
const User = require('../models/user')

function isUser(req,res,next){
  if(req.headers.token){
    let decoded = jwt.verify(req.headers.token, secret)
    User.find({
      _id: decoded.id
    })
    .then(user=>{
      if(user.length>0){
        next()
      } else {
        res.status(401).json({
          message: 'You are not logging in'
        })
      }
    })
    .catch(err=>{
      res.status(404).json({
        message: 'not found'
      })
    })
  }
}

module.exports = {
  isUser: isUser
}
