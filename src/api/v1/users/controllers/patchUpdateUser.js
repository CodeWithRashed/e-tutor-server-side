const updateUser = require("../../../../lib/user/updateUser");


const patchUpdateUser= async (req, res) => {
    const filter = req.query;
const newData = req.body

    console.log(filter)
    const dbUserData= await updateUser(filter, req.body)
    res.send(dbUserData);
}


module.exports = patchUpdateUser
