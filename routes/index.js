const express = require("express"),
      multer = require("multer");
var router = express.Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/uploads");
  },
  filename: (req, file, cb) => {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  }
});

var upload = multer({storage: storage});

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/file-size", upload.single("file"), (req, res) => {
  res.send({
    size: `${req.file.size} bytes`
  });
});

module.exports = router;