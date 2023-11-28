const { User } = require("../../models");

const updateUser = async (filter, newData) => {
  console.log(filter);
  console.log(newData);
  let result = await User.findOneAndUpdate(filter, newData, {
    new: true,
    upsert: true,
  });
  return result;
};

module.exports = updateUser;
