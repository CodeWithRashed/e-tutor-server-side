const { User } = require("../../models");

const findUserCount = async () => {
  const result = await User.find().select('_id');
  return result;
};

module.exports = findUserCount;
