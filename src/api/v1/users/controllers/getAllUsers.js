const findAllUser = require("../../../../lib/user/findAllUser");

const getAllUser= async (req, res) => {
    const dbAllUserData= await findAllUser()
    res.send(dbAllUserData);
}


module.exports = getAllUser
