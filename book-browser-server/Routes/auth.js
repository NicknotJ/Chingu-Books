const express = require('express');
const auth = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const bcrypt = require('bcrypt');
const pg = require('pg');
const conString = '';
const client = new pg.Client(conString);

const jwt = require('jsonwebtoken');
const config = {JWT_EXPIRY: '100d', JWT_SECRET: 'MOREBS'};
//probably want to pull in variables from a config type file
const createAuthToken = (user) => {
  return jwt.sign({user}, config.JWT_SECRET, {
    subject: user.id,
    expiresIn: config.JWT_EXPIRY,
    algorithm: 'HS256'
  });
};


client.connect((err) => {
  if(err){
    return console.error('could not connect to postgres', err);
  } else {
    console.log('I connected');
  }
});


auth.post('/', jsonParser, (req, res) => {
  //check the user password
  let { email, password } = req.body;
  if(!email){
    throw new Error('Email is required for logging in');
  }
  if(!password){
    throw new Error('Password is required for logging in');
  }
  const text = `SELECT * FROM users WHERE email=$1`;
  client.query(text, [email], (err, result) => {
      if(err){
        res.send(`ERROR: ${err}`);
      }
      if(result.rows[0].password === password){
        let fakeUser = {id: String(result.rows[0].id)}
        console.log(fakeUser);
        res.send(createAuthToken(fakeUser));
      } else {
        res.send('ERROR: Password does not match.');
      }
    })

});


module.exports = auth;