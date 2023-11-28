const findAllUser = require("../../../../lib/user/findAllUser");

const getAllUser= async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize);
    const dbAllUserData= await findAllUser(page, pageSize)
    res.send(dbAllUserData);
}


module.exports = getAllUser
