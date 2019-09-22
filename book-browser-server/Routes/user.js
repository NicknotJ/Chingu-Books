const express = require('express');
const user = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();



user.post('/', jsonParser, (req, res) => {
  //future: current favorites as well. Not required, however
  let {email, password} = req.body;
  if(!email){
    throw new Error('Users require an email');
  }
  if(!password){
    throw new Error('Users require a password');
  }
  res.send(`New user with email:${email} and password:${password} will be created`);
});

user.delete('/', jsonParser, (req, res) => {
  //will need to doublecheck on the front end what data we are requiring
  let { email, password } = req.body;
  if(!email){
    throw new Error('Email required to delete user');
  }
  if(!password){
    throw new Error('Password required to delete user');
  }
  res.send(`User with email:${email} deleted`);
});




module.exports = user;