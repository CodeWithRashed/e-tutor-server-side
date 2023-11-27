
require("dotenv").config();

const config = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT,
  LOCAL_CLIENT1: process.env.LOCAL_CLIENT1,
  CLIENT: process.env.CLIENT,
};

module.exports = Object.freeze(config);
