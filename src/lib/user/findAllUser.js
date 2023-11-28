const { User } = require("../../models");
const findAllUser = async (page, pageSize) => {
  let tablePageSize = null;
  if (pageSize) {
    tablePageSize = pageSize;
  }
  const startIndex = (page - 1) * pageSize;
  const result = await User.find().skip(startIndex).limit(tablePageSize).exec();
  return result;
};

module.exports = findAllUser;
