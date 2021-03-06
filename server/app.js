const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const app = express()

const mongoose = require('mongoose')
const url = 'mongodb://admin:admin@ds237669.mlab.com:37669/forblog'
mongoose.connect(url, (err) => {
  if(!err) console.log('connected to database')
  else throw new Error(err)
})

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req,res)=>{
  res.send('Home')
})

app.use('/article', require('./routes/article'))
app.use('/user', require('./routes/user'))

app.listen(port,function(req,res){
  console.log(`App listen on ${port}`)
})

// module.exports = app
