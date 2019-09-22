const express = require('express');
const auth = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();



auth.get('/', (req, res) => {
  res.send('You are authorized, but then again so is everyone');
});

auth.post('/:userID', jsonParser, (req, res) => {
  //check the user password
  let { email, password } = req.body;
  if(!email){
    throw new Error('Email is required for logging in');
  }
  if(!password){
    throw new Error('Password is required for logging in');
  }
  res.send('Listen, nothing is being checked at the moment');
});


module.exports = auth;