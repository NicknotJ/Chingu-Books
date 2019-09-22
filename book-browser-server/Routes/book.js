const express = require('express');
const book = express.Router();
//not sure if we will need these two for this route
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
//going to need to passport this up


book.get('/', (req, res) => {
  //grab the user from the JWT token

});


module.exports = book;