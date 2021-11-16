const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema(
  {
    name: { type: String, required: true },
    propellers: { type: Number },
    maxSpeed: { type: Number },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Drone", droneSchema);
