var Flight = require('../models/flight');

module.exports = {
  create
};

//Note: Since show.ejs has input names airport and arrival, req.body has properties airport and arrival. As a result, we push req.body directly into the flight.destinations property.
function create(req, res) {
   Flight.findById((req.params.id), function(err, flight) {
      flight.destinations.push(req.body);
      flight.save(function(err) {
         res.redirect(`/flights/${flight._id}`);
       });
   });
};