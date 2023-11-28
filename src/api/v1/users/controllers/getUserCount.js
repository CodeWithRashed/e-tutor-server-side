const findUserCount = require("../../../../lib/user/findUserCount");

const getUserCount= async (req, res) => {
    const dbUserCount= await findUserCount()
    res.send(dbUserCount);
}


module.exports = getUserCount
