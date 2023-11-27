const findAllCourses = require("../../../../lib/courses/findAllCourses");

const findAll= async (req, res) => {
    const filter = req.query;
    
    const allCourses= await findAllCourses(filter)
    res.send(allCourses);
}


module.exports = findAll
