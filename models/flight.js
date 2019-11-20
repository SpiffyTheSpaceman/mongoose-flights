var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
  airport: {
      type: String,
      enum: ["AUS", "DAL", "LAX", "SAN", "SEA"]
  },
  arrival: {
      type: Date
  },
  index: Number,
});

var flightSchema = new Schema({
  airline: {
      type: String,
      enum: ["American", "Southwest", "United"]
  },
  flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999
  },
  departs: {
      type: Date,
      default: function() {
         let newDate = new Date();
         newDate.setFullYear(newDate.getFullYear() + 1);
         return newDate;
      }
  },
  airport: {
      type: String,
      enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
      default: "SAN"
  },
  destinations: [destinationSchema]
});
module.exports = mongoose.model("Flight", flightSchema);
