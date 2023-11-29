const { Course } = require("../../models");

const updateCourse = async (filter, newData) => {
  console.log(filter);
  console.log(newData);
  let result = await Course.findOneAndUpdate(filter, newData, {
    new: true,
    upsert: true,
  });
  return result;
};

module.exports = updateCourse;
