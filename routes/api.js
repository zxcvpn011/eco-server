const express = require('express');
const router = express.Router();

router.all('/', function(req, res) {
  console.log(req);
  res.send("<h1>API Page</h1>");
});

module.exports = router;