const express = require('express');
const router = new express.Router();

// GET /
router.get('/', function(req, res, next) {
  return res.render('index');
});

// GET /projects
router.get('/projects', function(req, res, next) {
  return res.render('projects');
});

// GET /about-me
router.get('/about-me', function(req, res, next) {
  return res.render('aboutMe');
});

module.exports = router;
