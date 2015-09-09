mongoose = require('mongoose');
Schema = mongoose.Schema;

var City = new Schema({
  name: String,
  state: String
});



mongoose.connect('mongodb://localhost/crud-cities');
module.exports = mongoose.model('cities', City);

