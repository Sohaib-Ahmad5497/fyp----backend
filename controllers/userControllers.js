
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username, !email, !password) {
      res.status(404);
      throw new Error("All Fields All  Mandatory To Fill");
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "user Already exisit" })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET)
    res.status(200).json({ user: user, token: token });

  } catch (error) {
    console.log(`Error Occuring in Registeration of the user${error}`);
    res.status(500).json({ message: "Error Occuring in Registeration of the user" })
  }
})

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!email || !password) {
      res.status(404).json({ message: "All Fields All Are Mandatory To Login" });
      throw new Error("All Fields All Are Mandatory To Login");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(404).json({ Message: "Passord is Invalid" })
    }

    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET)
    res.status(200).json({ user: user, token: token });

  } catch (error) {
    console.log(`Error Occuring in Login of the user${error}`);
    res.status(500).json({ message: "Error Occuring in Login of the user" })
  }
})


module.exports = { registerUser, loginUser };
