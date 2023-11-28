const findUser = require("../../../../lib/user/findUser");

const getUser= async (req, res) => {
    const filter = req.query;
    console.log(filter)
    const dbUserData= await findUser(filter)
    res.send(dbUserData);
}


module.exports = getUser
