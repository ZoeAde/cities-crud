var express = require('express');
var router = express.Router();
var City = require('../cities.js');

router.get('/', function(req, res, next) {
  City.find(function(err, data){
     var cities = data;
     res.render('index', { cities: cities });
  });
});

//GET all cities
router.get('/cities', function(req, res, next) {
  City.find(function(err, data) {
    if (err) {
      res.json({'message':err});
    } else {
      res.json(data);
    }
  });
});

//GET single city
router.get('/cities/:id', function(req, res, next) {
  City.findById(req.params.id, function(err, data) {
    if (err) {
      res.json({'message':err});
    } else {
      res.json(data);
    }
  });
});

//POST all cities
router.post('/cities', function(req, res, next) {
  newCity = new City(req.body);
  console.log(req.body);
  newCity.save(function(err, data) {
    if (err) {
      res.json({'message':err});
    } else {
     res.redirect("/");
    }
  });
});

//PUT single city
router.put('/cities/:id', function(req, res, next) {
  console.log(req.body.name);
  console.log(req.body.state);
  var update = {
    name: req.body.name,
    state: req.body.state
  };
  City.findByIdAndUpdate(req.params.id, update, function(err, data) {
    if (err) {
      res.json({'message':err});
    } else {
      res.json(data);
    }
  });
});


//DELETE single city
router.delete('/cities/:id', function(req, res, next) {
  City.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.json({'message':err});
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
