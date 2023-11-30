const { Course } = require("../../models");


const findTeachersCourse = async (query) => {
    
  const result = await Course.find(query).select('_id title price description thumbnail isApproved');
  return result;
};

module.exports = findTeachersCourse;
