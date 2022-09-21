var express = require("express");
var router = express.Router();
const { index, create, store } = require("./controller");

/* GET users listing. */
router.get("/", index);
router.get("/create", create);
router.post("/store", store);

module.exports = router;
