const findCourses = require("../../../../lib/courses/findCourses");


const findAllCourses= async (req, res) => {
    // const query = req.query;
    
    const allCourses= await findCourses()
    res.send(allCourses);
}


module.exports = findAllCourses
