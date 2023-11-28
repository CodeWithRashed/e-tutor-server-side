const mongoose = require("mongoose");
const Course = require("../../../../models/Course");

const CourseSchema = Course.model("Course");
const createCourse = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data)
    const newCourse = new Course(data);
    const result = await newCourse.save();
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = createCourse;
