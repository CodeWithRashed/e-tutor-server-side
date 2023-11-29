const findCourses = require("../../../../lib/courses/findCourses");

const findAllCourses = async (req, res) => {
  let query = req.query;

  const allCourses = await findCourses(query);
  res.send(allCourses);
};

module.exports = findAllCourses;
