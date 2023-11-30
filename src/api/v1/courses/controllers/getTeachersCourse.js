const findTeachersCourse = require("../../../../lib/courses/findTeachersCourse");


const getTeachersCourse = async (req, res) => {
  let query = req.query;

  const allCourses = await findTeachersCourse(query);
  res.send(allCourses);
};

module.exports = getTeachersCourse;
