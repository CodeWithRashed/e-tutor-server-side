const { Course } = require("../../models");

const deleteCourse = async (filter) => {
  let result = await Course.deleteOne(filter);
  return result;
};

module.exports = deleteCourse;
