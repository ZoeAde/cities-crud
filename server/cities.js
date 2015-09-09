mongoose = require('mongoose');
Schema = mongoose.Schema;

var City = new Schema({
  name: String,
  state: String
});



// process.env.MONGOLAB_URI = 'mongodb://localhost/crud-cities';
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/crud-cities");

console.log(process.env)
module.exports = mongoose.model('cities', City);

