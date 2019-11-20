var Ticket = require('../models/ticket');

module.exports = {
   new: newTicket,
   create,
   delete: deleteTicket
}

function newTicket(req, res) {
   res.render("tickets/new", {title: "Add Title", id: req.params.id}) 
};

function create(req, res) {
   req.body.flight = req.params.id;
   Ticket.create(req.body, function(err, ticket) {
      res.redirect(`/flights/${req.params.id}`)
   })
};

function deleteTicket(req, res) {
   Ticket.findById(req.params.id, function(err, ticket) {
      req.body.flight = ticket.flight;
      Ticket.deleteOne({"_id": req.params.id}, function(err, flight) {
         res.redirect(`/flights/${req.body.flight}`);
       });
   })

};