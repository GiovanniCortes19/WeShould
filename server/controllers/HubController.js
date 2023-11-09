const Hub = require('../models/HubModel');
const User = require('../models/UserModel');

const HubController = {};

HubController.createHub = async (req, res, next) => {
  const { name, userId, connectingUserId, movies, restaurants } = req.body;

  const newHub = await Hub.create({
    name,
    users: [userId, connectingUserId],
    movies,
    restaurants,
  });

  const userOne = await User.findByIdAndUpdate(userId, { hub: newHub._id });
  const userTwo = await User.findByIdAndUpdate(connectingUserId, {
    hub: newHub._id,
  });

  res.locals.hubId = newHub._id;
  res.locals.createdHub = newHub;

  next();
};

HubController.addMovie = async (req, res, next) => {
  const { hubId, movie } = req.body;

  // find hub and update movie list
  const foundHub = await Hub.findByIdAndUpdate(
    hubId,
    {
      $push: { movies: movie },
    },
    { new: true }
  );

  if (!foundHub) {
    return next({
      log: 'Express global error handler caught HubController.addMovie error',
      status: 500,
      message: { err: 'An error ocurred pushing movie to hub of user' },
    });
  }

  res.locals.updatedHub = foundHub;

  next();
};

HubController.addRestaurant = async (req, res, next) => {
  const { hubId, restaurant } = req.body;

  // find hub and update movie list
  const foundHub = await Hub.findByIdAndUpdate(
    hubId,
    {
      $push: { restaurants: restaurant },
    },
    { new: true }
  );

  if (!foundHub) {
    return next({
      log: 'Express global error handler caught HubController.addRestaurant error',
      status: 500,
      message: { err: 'An error ocurred pushing restaurant to hub of user' },
    });
  }

  res.locals.updatedHub = foundHub;

  next();
};

module.exports = HubController;
