
require("dotenv").config();

const config = {
  LOCAL_CLIENT: process.env.LOCAL_CLIENT,
  LOCAL_CLIENT_SECOND: process.env.LOCAL_CLIENT_SECOND,
  CLIENT: process.env.CLIENT,
};

module.exports = Object.freeze(config);
