const findAllUser = require("../../../../lib/user/findAllUser");

const getAllUser = async (req, res) => {
  let query = {};
  const isTeacherRequest = req.query.isTeacherRequest;
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize);

  if (isTeacherRequest == "All") {
    query = {
      isTeacherRequest: { $in: ["Pending", "Accepted", "Rejected"] },
    };
  }
  if (isTeacherRequest == "Accepted") {
    query = {  isTeacherRequest: "Accepted"}
  }
  
  if (isTeacherRequest == "Pending") {
    query = { isTeacherRequest: "Pending" };
  }

  const dbAllUserData = await findAllUser(query, page, pageSize);
  res.send(dbAllUserData);
};

module.exports = getAllUser;
