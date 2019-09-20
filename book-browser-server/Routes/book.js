const express = require('express');
const book = express();


book.get('/', (req, res) => {
  res.send('You accessed the wonderful world of reading');
});


module.exports = book;