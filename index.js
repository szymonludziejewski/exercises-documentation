require('dotenv').config();
const express = require('express');
const path = require('path');
const database = require('./simple-database/database');

const environment = process.env;
const app = express();

app.get('/', (_request, response) => {
  response.sendFile(path.join(__dirname, './helloworld.html'));
});

app.use(require('./routes'));

app.listen(environment.PORT, () => {
  console.log(`Server running on port ${environment.PORT}`);
});
