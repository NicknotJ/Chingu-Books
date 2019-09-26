const express = require('express');
const book = express.Router();
//not sure if we will need these two for this route
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
//going to need to passport this up
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

book.post('/', jsonParser, (req, res) => {
  //grab the user from the JWT token
  //grab favorites from the database
  //return favorites
  let { email, password } = req.body;
  let userid;
  const text = `SELECT * FROM users WHERE email=$1`;
  client.query(text, [email], (err, result) => {
    if(err){
      res.send(`ERROR: ${err}`);
    }
    if(result.rows[0].password === password){
      client.query(`SELECT * from favorites WHERE userid=${result.rows[0].id}`, (err, result) => {
        if(err){
          res.send(`ERROR: ${err}`);
        }
        res.send(result.rows);
      })  
    } else {
      res.send('ERROR: Password does not match.');
    }
  });
});


module.exports = book;


