var Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  show,
  create,
  delete: deleteFlight,
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  });
};
function newFlight(req, res) {
   var newFlight = new Flight();
   var dt = newFlight.departs;
   var destDate = 
      `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}T${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}`;
   res.render('flights/new', { title: 'Add Flight', destDate });
};
function show(req, res) {
   Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', {title: 'Flight Detail', flight});
   });
};

function create(req, res) {
   var flight = new Flight(req.body);
   flight.save(function(err) {
     // one way to handle errors
     if (err) return res.redirect('/flights/new');
     // for now, redirect right back to new.ejs
     res.redirect('/flights');
   });
 }

 function deleteFlight(req, res) {
    
 }