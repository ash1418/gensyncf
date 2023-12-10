const express = require("express");
const router = express.Router();
const { drop } = require("../../controllers/godmode");

router.route("/drop").delete(drop);
module.exports = router;
