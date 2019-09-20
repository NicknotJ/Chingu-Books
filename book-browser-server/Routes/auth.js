const express = require('express');
const auth = express();


auth.get('/', (req, res) => {
  res.send('You are authorized, but then again so is everyone');
});


module.exports = auth;