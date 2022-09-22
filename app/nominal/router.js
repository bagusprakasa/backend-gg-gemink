var express = require("express");
var router = express.Router();
const { index, create, store, edit, update, destroy } = require("./controller");

/* GET users listing. */
router.get("/", index);
router.get("/create", create);
router.post("/", store);
router.get("/edit/:id", edit);
router.put("/:id", update);
router.delete("/:id", destroy);

module.exports = router;
