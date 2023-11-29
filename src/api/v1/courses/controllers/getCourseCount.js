const findCourseCount = require("../../../../lib/courses/findCourseCount");
const getCourseCount= async (req, res) => {
    const dbCourseCount = await findCourseCount()
    res.send(dbCourseCount);
}


module.exports = getCourseCount
