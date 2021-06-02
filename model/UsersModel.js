const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  address: {
    street: String,
    locality: String,
    city: String,
    state: String,
    pincode: String,
    coordinatesType: String,
    coordinates: [Number],
  },
})
module.exports = mongoose.model('Users',usersSchema);
