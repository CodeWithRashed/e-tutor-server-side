const mongoose = require("mongoose");
require("dotenv").config();

const getConnectionString = () => {
  let connectionUrl;

  if (process.env.NODE_ENV === "development") {
    connectionUrl = process.env.DATABASE_LOCAL;
  } else {
    connectionUrl = process.env.DATABASE_PROD;
  }
  return connectionUrl;
};

const connectDB = async () => {
const mongoURI = getConnectionString();
 mongoose.connect(mongoURI, { dbName: process.env.DB_NAME });
 console.log("connected to database");
};


module.exports= connectDB