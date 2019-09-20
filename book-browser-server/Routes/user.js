const express = require('express');
const user = express();


user.get('/', (req, res) => {
  res.send('I am user');
});


module.exports = user;