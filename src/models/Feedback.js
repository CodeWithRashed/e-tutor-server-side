const { model, Schema, default: mongoose } = require("mongoose");

const FeedbackSchema = new Schema({
    feedbackFor: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
  },
  feedbackTitle: {
    type: String,
    required: true,
  },
  
  feedbackDescription: {
    type: String,
    required: true,
  },
  feedbackBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Feedback = model("Feedback", FeedbackSchema);

module.exports = Feedback;
