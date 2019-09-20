const express = require('express');
const app = express();
const book = require('./Routes/book');
const auth = require('./Routes/auth');
const user = require('./Routes/user');

app.use('/book', book);
app.use('/auth', auth);
app.use('/user', user)


app.get('/', (req, res) => {
  res.send('You accessed /. Why.');
});

app.get('/pizza', (req, res) => {
  res.send('Sup Dawg');
});

app.listen(8080);