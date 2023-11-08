// CREATE SERVER CONNECTION AND ROUTES
const express = require('express');
const path = require('path');

// EXPRESS APP
const app = express();
const PORT = 3000;

// PARSE REQUEST BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// STATIC
app.use(express.static(path.join(__dirname, '../client')));

// ROUTE HANDLERS
// app.get('/api/signup', (req, res) => {
//   console.log('invoked get signup');
//   return res
//     .status(200)
//     .sendFile(path.join(__dirname, '../client/signUp.html'));
// });

// UNKOWN ENDPOINTS
app.use('*', (req, res) => {
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
