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

module.exports = HubController;
