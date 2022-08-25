const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    version: '1.0.0',
    title: 'My Todo Project CRUD',
    description: 'My Todo Project Application API',
  },
  host: 'localhost:8000',
  schemes: ['https', 'http'],
  tags: [
    {
      name: 'Todo',
      description: 'API for todos',
    },
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {
    Todo:{
      $id: "id",
      $definition: "definition",
      comment: "commen",
      date: "2022-08-25T12:25:36.874Z",
      done: true,
    },
    Todos: {
      type: 'array',
      $ref: '#/definitions/Todo',
    },
    AddTodo: {
      done: true,
      $definition: "definition",
      comment: "commen",
      date: "2022-08-25T12:25:36.874Z",
    },
  },
}

const outputFile = './swagger/swagger.json'
const endpointsFiles = ['./index.js']

module.exports = swaggerAutogen(outputFile, endpointsFiles, doc)
