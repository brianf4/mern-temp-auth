require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todos = require('./routes/todoRoute')
const userRoute = require('./routes/userRoute')

// express app
const app = express()

// middleware - logs our requests
app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/todo', todos)
app.use('/api/user', userRoute)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & listening on port: ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })