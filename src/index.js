'use strict';

const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Application listening on ${PORT}...`);
});
