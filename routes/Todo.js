const mongoose = require('mongoose')
const Todos = mongoose.model('Todos')
module.exports = (app) => {
  app.get('/todos', async (req, res) => {
    Todos.find({})
      .then((todos) => {
        res.send(todos)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  })

  app.get('/todos/:id', async (req, res) => {
    Todos.findById(req.params.id)
      .then((todos) => {
        res.send(todos)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  })

  app.post('/todos', async (req, res) => {
    const todo = new Todos(req.body)
    try {
      const newTodo = await todo.save()
      res.send(newTodo)
    } catch (err) {
      res.status(400).json(err)
    }
  })
  app.put('/todos/:id', async (req, res) => {
    try {
      await Todos.findByIdAndUpdate(req.params.id, req.body)
      const todo = await Todos.findById(req.params.id)
      res.send(todo)
    } catch (err) {
      res.status(400).json(err)
    }
  })
  app.delete('/todos/:id', async (req, res) => {
    try {
      await Todos.findOneAndDelete(req.params.id)
      res.send(req.params.id)
    } catch (err) {
      res.status(400).json(err)
    }
  })
}
