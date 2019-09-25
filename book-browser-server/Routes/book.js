const express = require('express');
const book = express.Router();
//not sure if we will need these two for this route
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
//going to need to passport this up
const Pool = require('pg').Pool;
const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'api',
  password: '',
  port: '5432'
});



book.get('/', jsonParser, (req, res) => {
  //grab the user from the JWT token
  //grab favorites from the database
  //return favorites
  const id = parseInt(req.body.id);
  console.log(id);
  pool.query('SELECT * FROM users', (error, res) => {
    if(error){
      throw error;
    }
    res.status(200).json(results);
  })

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