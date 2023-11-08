// CREATE SERVER CONNECTION AND ROUTES
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// EXPRESS APP
const app = express();
const PORT = 3000;

// CONNECT DATABASE
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI);

// PARSE REQUEST BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// STATIC
app.use(express.static(path.join(__dirname, '../client')));

// ROUTE HANDLERS

app.get('/', (req, res) => {
  console.log('get login page');
  res.status(200).sendFile(path.resolve(__dirname, '../client/logIn.html'));
});

app.get('/api/signUp', (req, res) => {
  console.log('get signup page');
  return res.sendFile(path.resolve(__dirname, '../client/signUp.html'));
});
// app.get('/signUp', (req, res) => {
//   console.log('get signup page');
//   res.sendFile(path.resolve(__dirname, '../client/signUp.html'));
// });

// UNKOWN ENDPOINTS
app.use('/api/*', (req, res) => {
  console.log('unkown endpoint handler invoked');
  return res
    .status(404)
    .send('You Should Not do that... Go back to a real site!');
});

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
