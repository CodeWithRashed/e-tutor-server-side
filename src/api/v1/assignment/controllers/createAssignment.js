const mongoose = require("mongoose");
const { Assignment } = require("../../../../models");


const AssignmentSchema = Assignment.model("Assignment");
const createAssignment = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data)
    const newAssignment = new Assignment(data);
    const result = await newAssignment.save();
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createAssignment;
