const findCourses = require("../../../../lib/courses/findCourses");


const findAllCourses= async (req, res) => {
  
    let query = {};
    const isTeacherRequest = req.query.isTeacherRequest;
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize);
    
    const allCourses= await findCourses(query, page, pageSize)
    res.send(allCourses);
}


module.exports = findAllCourses
