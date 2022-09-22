const mongoose = require("mongoose");
let nominalSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Nominal is required"],
  },
  qty: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Nominal", nominalSchema);
