require('dotenv').config();

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Example API',
            version: '1.0.0',
            description: 'A simple API for learning JS Doc and Swagger'
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}`
            },
            {
                url: `https://localhost:${process.env.PORT}`
            },
        ]
    },
    apis: ['index.js', './routes/*.js']
}

module.exports = options;