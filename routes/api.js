const express = require('express');
const router = express.Router();
const database = require('../simple-database/database');

router.get('/', (_request, response) => {
  response.json({
    description:
      'Zaimplmentuj ścieżki /students /employees /faculty z użyciem metod GET, POST, PUT, PATCH, DELETE',
  });
});

router.post('/', (request, response) => {
  response.json(request.body);
});

module.exports = router;
