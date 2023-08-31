const express = require('express')
const Todos = require('../models/todoModel')
const {
  createTodo,
  getTodo,
  getTodos,
  deleteTodo,
  updateTodo
} = require('../controllers/todoController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// requires auth for all todo routes
//router.use(requireAuth)

// GET all todos
router.get('/', getTodos)

// GET a single todo
router.get('/:id', getTodo)

// POST a new todo
router.post('/', createTodo)

// DELETE a workout
router.delete('/:id', deleteTodo)

// UPDATE a workout
router.put('/:id', updateTodo)

module.exports = router