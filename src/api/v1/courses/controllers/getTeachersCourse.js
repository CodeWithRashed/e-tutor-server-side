const findTeachersCourse = require("../../../../lib/courses/findTeachersCourse");

const getTeachersCourse = async (req, res) => {
  let query = req.query;
  console.log(query)
  if (query.teacher == "null" || query.teacher === undefined) {
    console.log("inside query")
    query = {};
  }
  console.log(query)
  const allCourses = await findTeachersCourse(query);
  res.send(allCourses);
};

module.exports = getTeachersCourse;