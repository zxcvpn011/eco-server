const express = require('express');
const router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {
  console.log(15152);
  res.render('index', { title: 'Express' });
});

module.exports = router;
