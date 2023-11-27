const mongoose = require("mongoose");
const User = require("../../../../models/User");

const UserSchema = User.model('User');
const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data)
    const email = req.body.email;
    const query = { email: email };

    const existingUser = await UserSchema.findOne(query)
    if (!existingUser) {
      const newUser = new User(data);
      const result = await newUser.save();
      res.status(201).json(result); 
        } else {

      res.status(200).json({ message: "User already exists" });  
    }
    
  } catch (err) {
    next(err);
  }
};

module.exports = createUser;
