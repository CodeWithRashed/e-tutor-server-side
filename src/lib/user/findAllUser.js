const { User } = require("../../models");
const findAllUser = async (query, page, pageSize) => {
  let tablePageSize = null;
  if (pageSize) {
    tablePageSize = pageSize;
  }
  const startIndex = (page - 1) * pageSize;
  const result = await User.find(query).skip(startIndex).limit(tablePageSize).exec();
  return result;
};

module.exports = findAllUser;
