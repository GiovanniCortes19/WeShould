const User = require('../models/UserModel');

const UserController = {};

UserController.createUser = async (req, res, next) => {
  // get username and password
  const { username, password } = req.body;
  console.log('request body from createUser: ', req.body);

  if (!username || !password) {
    return next({ err: 'invalid user properties' });
  }

  const newUser = await User.create({ username, password });

  res.locals.userId = newUser._id;

  next();
};

UserController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next({ err: 'invalid user properties' });
  }

  const foundUser = await User.findOne({ username, password });

  if (!foundUser) {
    res.status(500).json('NO user found');
  }

  res.locals.user = foundUser;

  next();
};

module.exports = UserController;
