const { User } = require("../../models");

const findUser = async (filter) => {
  const query = {
    email: { $regex: filter.email, $options: "i" },
  };

  const result = await User.find(query);

  return result;
};

module.exports = findUser;
