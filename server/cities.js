mongoose = require('mongoose');
Schema = mongoose.Schema;

var City = new Schema({
  name: String,
  state: String
});



process.env.DB_HOST = 'mongodb://localhost/crud-cities';
mongoose.connect("process.env.mongodb://heroku_lbsj7r9x:njtsja3hrhpt9bk0gspdg9bkic@ds051368.mongolab.com:51368/heroku_lbsj7r9x" || "mongodb://localhost/crud-cities");

module.exports = mongoose.model('cities', City);

