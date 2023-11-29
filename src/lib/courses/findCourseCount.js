const { Course } = require("../../models");


const findCourseCount = async () => {
  const result = await Course.find().select('_id');
  return result;
};

module.exports = findCourseCount;
