const findAllUser = require("../../../../lib/user/findAllUser");

const getAllUser= async (req, res) => {
    let query = {}
    const isTeacherRequest = req.query.isTeacherRequest
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize);
    if (isTeacherRequest === 'true') {
        query = { isTeacherRequest: true };
      }
    const dbAllUserData= await findAllUser(query, page, pageSize)
    res.send(dbAllUserData);
}


module.exports = getAllUser
