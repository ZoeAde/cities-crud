mongoose = require('mongoose');
Schema = mongoose.Schema;

var City = new Schema({
  name: String,
  state: String
});



process.env.DB_HOST = 'mongodb://localhost/crud-cities';
mongoose.connect(process.env.DB_HOST);

module.exports = mongoose.model('cities', City);

