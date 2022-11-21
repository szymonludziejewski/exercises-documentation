require('dotenv').config();
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const environment = process.env;
const app = express();
app.use(express.json());

/**
 * @swagger
 * components:
 *   schemas:
 *     DefaultResponse:
 *      type: object
 *      properties:
 *       desc:
 *        type: string
 *        description: Short description to current path
 *      example:
 *        desc: A description
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Return the main path of the app
 *     responses:
 *       200:
 *         description: Returns description where to see the documentation
 *         content: 
 *          application/json:
 *           schema:
 *            $ref: '#/components/schemas/DefaultResponse'
 */
app.get('/', (_request, response) => {
    response.json({
        desc:
            'Type /api-docs on the end of URL to see the SWAGGER documentation',
    });
});

app.use(require('./routes'));

const specs = swaggerJSDoc(require('./swagger.config'));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

app.listen(environment.PORT, () => {
    console.log(`Server running on port ${environment.PORT}`);
});
