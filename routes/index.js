const express = require("express"),
      multer = require("multer");
var router = express.Router();

var upload = multer({ dest: "" });

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/file-size", upload.single("file"), (req, res) => {
  res.send({
    size: `${req.file.size} bytes`
  });
});

module.exports = router;