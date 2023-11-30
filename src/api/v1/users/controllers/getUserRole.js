const findUserRole = require("../../../../lib/user/findUserRole");

const getUserRole= async (req, res) => {
    const query = req.query;
    console.log(query)
    const dbUserData= await findUserRole(query)
    res.send(dbUserData);
}


module.exports = getUserRole
