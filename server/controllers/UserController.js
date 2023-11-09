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

module.exports = UserController;
