// Post Schema

const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: String,
    mobile: {
      type: '123-456-8900',
      unique: true,
    },
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
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Users", usersSchema);
