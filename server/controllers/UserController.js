const User = require('../models/UserModel');
const Hub = require('../models/HubModel');

const UserController = {};

UserController.createUser = async (req, res, next) => {
  // get username and password
  const { username, password } = req.body;
  console.log('request body from createUser: ', req.body);

  if (!username || !password) {
    return next({
      log: 'Express global error handler caught UserController.createUser error',
      status: 500,
      message: { err: 'An error ocurred creating user' },
    });
  }

  // create user
  const newUser = await User.create({ username, password });

  res.locals.userId = newUser._id;

  next();
};

UserController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next({
      log: 'Express global error handler caught UserController.verifyUser error',
      status: 500,
      message: { err: 'An error ocurred verifying user' },
    });
  }

  // find user
  const foundUser = await User.findOne({ username, password });

  if (!foundUser) {
    res.status(500).json('NO user found');
  }

  res.locals.user = foundUser;

  next();
};

UserController.getHub = async (req, res, next) => {
  const { user } = req.params;

  const foundUser = await User.findOne({ username: user });

  if (!foundUser) {
    next({
      log: 'Express global error handler caught UserController.getHub error',
      status: 500,
      message: { err: 'An error ocurred getting hub of user' },
    });
  }

  const userHubId = foundUser.hub;

  const userHub = await Hub.findById(userHubId);

  if (!userHub) {
    next({
      log: 'Express global error handler caught UserController.getHub error',
      status: 500,
      message: { err: 'An error ocurred getting hub of user' },
    });
  }

  res.locals.hub = userHub;

  next();
};

UserController.getUsers = async (req, res, next) => {
  const allUsers = await User.find();

  res.locals.data = allUsers;

  next();
};

module.exports = UserController;
