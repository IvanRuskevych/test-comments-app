const { Router } = require("express");
const { getCommentsAndRepliesById } = require("../controllers");

const router = Router();

router.get("/", getCommentsAndRepliesById);

module.exports = router;
