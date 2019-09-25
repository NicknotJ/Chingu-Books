const express = require('express');
const book = express.Router();
//not sure if we will need these two for this route
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
//going to need to passport this up


book.get('/', (req, res) => {
  //grab the user from the JWT token
  //grab favorites from the database
  //return favorites
});


module.exports = book;

/*
const jwt = require('jsonwebtoken');
//probably want to pull in variables from a config type file
const createAuthToken = (user) => {
  return jwt.sign({user}, config.JWT_SECRET, {
    subject: user.email,
    expiresIn: config.JWT_EXPIRY,
    algorithm: 'HS256'
  });
};


*/