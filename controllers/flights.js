var Flight = require("../models/flight");
var Ticket = require("../models/ticket");


module.exports = {
  index,
  new: newFlight,
  show,
  create,
  delete: deleteFlight
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render("flights/index", { title: "All Flights", flights });
  });
}
function newFlight(req, res) {
  var newFlight = new Flight();
  var dt = newFlight.departs;
  var destDate = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}T${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
  res.render("flights/new", { title: "Add Flight", destDate });
}
function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render("flights/show", { title: "Flight Detail", flight, tickets});
    })
  });
}

function create(req, res) {
  var flight = new Flight(req.body);
  flight.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect("/flights/new");
    // for now, redirect right back to new.ejs
    res.redirect("/flights");
  });
}

function deleteFlight(req, res) {
  //  Flight.deleteOne(req.params.id, (err, result) => console.log(result));
  Flight.deleteOne({"_id": req.params.id}, function(err, flight) {
    res.redirect("/flights");
  });
  //  res.redirect('/flights');
}
