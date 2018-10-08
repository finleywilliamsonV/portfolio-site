const express = require('express');
const router = new express.Router();

// GET /
router.get('/', function(req, res, next) {
  return res.render('index');
});

// GET /portfolio
router.get('/portfolio', function(req, res, next) {
  return res.render('portfolio');
});

module.exports = router;
