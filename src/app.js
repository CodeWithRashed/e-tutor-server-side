const express = require("express");
const applyMiddleware = require("./middlewares");
const globalErrorHandler = require("./utils/globalErrorHandler");
const connectDB = require("./db/connectDB");
const stripe = require('stripe')(process.env.STRIPE_KEY)
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const authRoutes = require('./routes/v1/authentication');
const coursesRoutes = require('./routes/v1/courses');
const saveUserData = require('./routes/v1/users');
const assignmentRoute = require('./routes/v1/assignment');

applyMiddleware(app);

app.post("/create-payment-intent", async (req, res) => {
  const { price } = req.body
  const amount = parseInt(price * 100)

  const { client_secret } = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ['card']

  })
  res.send({ clientSecret: client_secret })
})

app.use(authRoutes)
app.use(coursesRoutes)
app.use(saveUserData)
app.use(assignmentRoute)
app.get("/health", (req, res) => {
  res.send("server is running....");
});

// handling all (get, post, update, delete.....)
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);



module.exports = app