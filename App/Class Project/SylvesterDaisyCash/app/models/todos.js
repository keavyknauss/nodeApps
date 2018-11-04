var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var todoSchema = new Schema({
    todo: {type: String, require: true },
    priority: {type: String, enum: ['critical', 'high', 'low']},
    dateDue: { type: Date, default: Date.now }

});

module.exports =
    Mongoose.model('Todo', todoSchema);
  