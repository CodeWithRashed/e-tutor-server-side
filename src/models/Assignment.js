const { model, Schema, default: mongoose } = require("mongoose");

const AssignmentSchema = new Schema({
  assignmentFor: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
  },
  assignmentTitle: {
    type: String,
    required: true,
  },
  assignmentDeadline: {
    type: [Date],
    required: true,
  },
  assignmentDescription: {
    type: String,
    required: true,
  },
});

const Assignment = model("Assignment", AssignmentSchema);

module.exports = Assignment;
