const express = require('express');
const user = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const bcrypt = require('bcrypt');
const saltRounds = 10; //maybe import this from a .gitignore file (ulti envi var?)
const pg = require('pg');
const conString = '';
const client = new pg.Client(conString);

client.connect((err) => {
  if(err){
    return console.error('could not connect to postgres', err);
  } else {
    console.log('I connected');
  }
});



user.post('/', jsonParser, (req, res) => {
  //future: current favorites as well (someone adding favorites then creating a user). Not required, however
  let {email, password} = req.body;
  if(!email){
    throw new Error('Users require an email');
  }
  if(!password){
    throw new Error('Users require a password');
  }
  const text = 'INSERT INTO users(email, password) VALUES($1, $2) RETURNING *';
  const values = [email, password];
  client.query(text, values, (err, result) => {
      if(err){
        res.send(`ERROR: ${err}`);
      }
      res.send(result.rows[0]);
    })

  //bcrypt up that password bro
  //bcrypt.hash(password, saltRounds, (err, hash) => {

});


//Deleting a user will be an extended feature
// user.delete('/', jsonParser, (req, res) => {
//   //will need to doublecheck on the front end what data we are requiring
//   let { email, password } = req.body;
//   if(!email){
//     throw new Error('Email required to delete user');
//   }
//   if(!password){
//     throw new Error('Password required to delete user');
//   }
//   res.send(`User with email:${email} deleted`);
// });




module.exports = user;