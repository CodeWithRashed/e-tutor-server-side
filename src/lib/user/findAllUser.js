const { User } = require("../../models");

const findAllUser = async () => {
  const result = await User.find();
  return result;
};

module.exports = findAllUser;
