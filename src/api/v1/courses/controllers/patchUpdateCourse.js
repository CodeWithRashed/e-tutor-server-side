const updateCourse = require("../../../../lib/courses/updateCourse");
const updateUser = require("../../../../lib/user/updateUser");

const patchUpdateCourse = async (req, res) => {
  const filter = req.query;
  const newData = req.body;

  const dbCourseData = await updateCourse(filter, newData);
  res.send(dbCourseData);
};

module.exports = patchUpdateCourse;
