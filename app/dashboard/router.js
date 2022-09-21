var express = require("express");
var router = express.Router();
const { index } = require("./controller");

/* GET users listing. */
router.get("/", index);

module.exports = router;
