const http = require('http');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('You accessed /. Why.');
});

app.get('/pizza', (req, res) => {
  res.send('Sup Dawg');
});

app.listen(8080);