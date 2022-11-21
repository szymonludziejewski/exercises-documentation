const express = require('express');
const router = express.Router();
const database = require('../simple-database/database');


/**
 * @swagger
 * /api:
 *   get:
 *     summary: Return description of a task for students
 *     responses:
 *       200:
 *         description: Return description of a task for students
 *         content: 
 *          application/json:
 *           schema:
 *            $ref: '#/components/schemas/DefaultResponse'
 */
router.get('/', (_request, response) => {
    response.json({
        desc:
            'Implement a documentation to the existing endpoints',
    });
});

router.post('/', (request, response) => {
    response.json(request.body);
});

module.exports = router;
