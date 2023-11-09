// CREATE SERVER CONNECTION AND ROUTES
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const mongoose = require('mongoose');

// EXPRESS APP
const app = express();
const PORT = 3000;

// CONNECT DATABASE
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI);

// PARSE REQUEST BODY
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// STATIC
app.use(express.static(path.join(__dirname, '../client')));

// CONTROLLERS
const UserController = require('./controllers/UserController');
const HubController = require('./controllers/HubController');

// ROUTE HANDLERS

app.get('/', (req, res) => {
  console.log('get login page');
  res.status(200).json('got the WeShould page');
});

// SIGNUP
app.post('/signup', UserController.createUser, (req, res) => {
  console.log('Created user id: ', res.locals.userId);
  res.status(200).json(res.locals.userId);
});

app.post('/login', UserController.verifyUser, (req, res) => {
  console.log('User has logged in!');
  console.log('Verified User: ', res.locals.user);
  res.status(200).json(res.locals.user);
});

// CREATE HUB CONNECTIONS
app.post('/connection', HubController.createHub, (req, res) => {
  const hubId = res.locals.hubId;
  res.status(200).json({ message: 'created hub', hubId });
});

app.get('/hubs/:user', UserController.getHub, (req, res) => {
  console.log('Got the user hub: ', res.locals.hub);
  const hub = res.locals.hub;
  res.status(200).json(hub);
});

// AUTHORIZED ENDPOINT

// UNKOWN ENDPOINTS
// app.use('*', (req, res, next) => {
//   console.log('unkown endpoint handler invoked');
//   return res
//     .status(404)
//     .send('You Should Not do that... Go back to a real site!');
// });

// GLOBAL ERROR
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express global error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error ocurred' },
  };

  const errorObj = Object.assign({}, defaultError, err);

  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
