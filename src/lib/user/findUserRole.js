const { User } = require("../../models");

const findUserRole = async (query) => {
  const result = await User.find(query).select("_id email role");
  return result;
};

module.exports = findUserRole;
