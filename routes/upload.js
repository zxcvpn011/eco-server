const express = require('express');
const multer = require('multer');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const path = require("path")
const storage = multer.diskStorage({   
  destination: function(req, file, callabck) { 
     callabck(null, 'uploads/');    
  }, 
  filename: function (req, file, callabck) {
    let extname = path.extname(file.originalname);
    const filename = uuidv4();
    const timestamp = Date.now();
    const originalname = Buffer.from(file.originalname, "latin1").toString("utf8")
    // console.log(originalname);
    //genereate unique random name for any new file
     callabck(null , `${filename}-${timestamp}-${originalname}`);   
  },
});
const upload = multer({ storage });


router.post('/', upload.single('file'), (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).json({
    file: req.file
  });
});
router.post('/multiple', upload.array('files'), (req, res) => {
  req.files = req.files.map(e => {
    console.log(e);
    let {filename, mimetype, path, size} = e
    path = "/storage/"+filename
    return {path}
  })
  // console.log(req.files);
  res.setHeader("Content-Type", "application/json; charset=utf-8")
  res.status(200).json({
    files: req.files
  });
});
router.get('/', (req, res) => {
  res.status(200).render("test.ejs")
});
router.get('/*', (req, res) => {
  res.sendStatus(403)
});

module.exports = router;