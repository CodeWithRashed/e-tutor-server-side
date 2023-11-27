const { model, Schema, default: mongoose } = require("mongoose");

const RattingSchema = new Schema({
  rattingFor: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
  },
  rattingCount: {
    type: String,
    required: true,
  },
  rattingDetails: {
    type: String,
    required: true,
  },
  rattingMadeBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Ratting = model("Ratting", RattingSchema);

module.exports = Ratting;
