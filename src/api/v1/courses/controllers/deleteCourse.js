const deleteCourse = require("../../../../lib/courses/deleteCourse");

const findAndDeleteCourse = async (req, res) => {
  const filter = req.query;


  const courseData = await deleteCourse(filter);
  res.send(courseData);
};

module.exports = findAndDeleteCourse;
