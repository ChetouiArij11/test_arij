
const mongoose = require('mongoose')


const postSchema = mongoose.Schema(
  {
    title : {type: String, required: true},
    contenu : {type: String, required: true},
  }
)


module.exports = mongoose.model('Post', postSchema)
