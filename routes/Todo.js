const mongoose = require('mongoose')
const Todos = mongoose.model('Todos')

module.exports = (app) => {
  app.get('/todos', async (req, res) => {
      /*  #swagger.tags = ['Todo']
          #swagger.description = 'Endpoint to get the todos' */
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
    /* 	#swagger.tags = ['Todo']
        #swagger.description = 'Endpoint to add a todo' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Todo information.',
            schema: { $ref: "#/definitions/AddTodo" }
    } */
    const todo = new Todos(req.body)
    try {
      const newTodo = await todo.save()
      res.send(newTodo)
    } catch (err) {
      res.status(400).json(err)
    }
  })
  app.patch('/todos/:id', async (req, res) => {
    /* 	#swagger.tags = ['Todo']
        #swagger.description = 'Endpoint to update a todo' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'Todo information.',
            schema: { $ref: "#/definitions/Todo" }
    } */
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
