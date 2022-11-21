require('dotenv').config();
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const environment = process.env;
const app = express();
app.use(express.json());

app.get('/', (_request, response) => {
  response.json({description: 'Type /api-docs on the end of URL to see the SWAGGER documentation'});
});

app.use(require('./routes'));

const specs = swaggerJSDoc(require('./swagger.config'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.listen(environment.PORT, () => {
  console.log(`Server running on port ${environment.PORT}`);
});
