const express = require('express');
const user = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const bcrypt = require('bcrypt');
const saltRounds = 10; //maybe import his from a .gitignore file (ulti envi var?)



user.post('/', jsonParser, (req, res) => {
  //future: current favorites as well (someone adding favorites then creating a user). Not required, however
  let {email, password} = req.body;
  if(!email){
    throw new Error('Users require an email');
  }
  if(!password){
    throw new Error('Users require a password');
  }

  //bcrypt up that password bro
  /*bcrypt.hash(password, saltRounds, (err, hash) => {

  })*/ 
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