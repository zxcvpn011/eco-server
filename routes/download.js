const express = require('express');
const router = express.Router();

router.get('/:filename', async (req, res) => {
  let { filename } = req.params;
  filename = filename.trim();
  console.log(filename);
  res.status(404).send("file not found");
});
module.exports = router;