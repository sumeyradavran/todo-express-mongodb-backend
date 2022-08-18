const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
  definition: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  done: {
    type: Boolean,
    default: false,
  },
  comment: {
    type: String,
  },
})

todoSchema.virtual('id').get(function () {
  return this._id.toHexString()
})

todoSchema.set('toJSON', {
  virtuals: true,
})
module.exports = mongoose.model('Todos', todoSchema)
