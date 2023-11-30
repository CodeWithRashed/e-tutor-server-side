const { Course } = require("../../models");

const findTeachersCourse = async (query) => {
  let findQuery = query;
  if (findQuery.teacher == "null" || findQuery.teacher === undefined) {
    findQuery = {};
  }
  const result = await Course.find(findQuery).select(
    "_id title price description teacher thumbnail isApproved"
  ).populate("teacher", "name email image category, experience, title")
  return result;
};

module.exports = findTeachersCourse;
