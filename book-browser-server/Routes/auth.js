const express = require('express');
const auth = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const bcrypt = require('bcrypt');



auth.post('/', jsonParser, (req, res) => {
  //check the user password
  let { email, password } = req.body;
  if(!email){
    throw new Error('Email is required for logging in');
  }
  if(!password){
    throw new Error('Password is required for logging in');
  }
  //if password matches hashed password, return JWT
  /*bcrypt.compare(password, hash, (err, res) => {
    
  })
  */
  res.send('Listen, nothing is being checked at the moment');
});


module.exports = auth;