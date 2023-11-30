const findAssignments = require("../../../../lib/assignment/findAssignments");
const findUser = require("../../../../lib/user/findUser");

const getAssignments= async (req, res) => {
    const filter = req.query;
    console.log(filter)
    const assignmentData= await findAssignments(filter)
    res.send(assignmentData);
}


module.exports = getAssignments
